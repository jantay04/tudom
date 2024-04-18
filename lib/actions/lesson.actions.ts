'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import Category from '@/lib/database/models/category.model'
import Lesson from '@/lib/database/models/lesson.model'
import User from '@/lib/database/models/user.model'
import { handleError } from '@/lib/utils'

import {
	CreateLessonParams,
	DeleteLessonParams,
	GetAllLessonsParams,
	GetLessonsByUserParams,
	GetRelatedLessonsByCategoryParams,
	UpdateLessonParams,
} from '@/types'

const getCategoryByName = async (name: string) => {
	return Category.findOne({ name: { $regex: name, $options: 'i' } })
}

const populateLesson = (query: any) => {
	return query
		.populate({
			path: 'organizer',
			model: User,
			select: '_id firstName lastName',
		})
		.populate({ path: 'category', model: Category, select: '_id name' })
}

// CREATE
export async function createLesson({
	userId,
	lesson,
	path,
}: CreateLessonParams) {
	try {
		await connectToDatabase()

		const organizer = await User.findById(userId)
		if (!organizer) throw new Error('Organizer not found')

		const newLesson = await Lesson.create({
			...lesson,
			category: lesson.categoryId,
			organizer: userId,
		})
		revalidatePath(path)

		return JSON.parse(JSON.stringify(newLesson))
	} catch (error) {
		handleError(error)
	}
}

// GET ONE LESSON BY ID
export async function getLessonById(lessonId: string) {
	try {
		await connectToDatabase()

		const lesson = await populateLesson(Lesson.findById(lessonId))

		if (!lesson) throw new Error('Lesson not found')

		return JSON.parse(JSON.stringify(lesson))
	} catch (error) {
		handleError(error)
	}
}

// UPDATE
export async function updateLesson({
	userId,
	lesson,
	path,
}: UpdateLessonParams) {
	try {
		await connectToDatabase()

		const lessonToUpdate = await Lesson.findById(lesson._id)
		if (!lessonToUpdate || lessonToUpdate.organizer.toHexString() !== userId) {
			throw new Error('Unauthorized or lesson not found')
		}

		const updatedLesson = await Lesson.findByIdAndUpdate(
			lesson._id,
			{ ...lesson, category: lesson.categoryId },
			{ new: true }
		)
		revalidatePath(path)

		return JSON.parse(JSON.stringify(updatedLesson))
	} catch (error) {
		handleError(error)
	}
}

// DELETE
export async function deleteLesson({ lessonId, path }: DeleteLessonParams) {
	try {
		await connectToDatabase()

		const deletedLesson = await Lesson.findByIdAndDelete(lessonId)
		if (deletedLesson) revalidatePath(path)
	} catch (error) {
		handleError(error)
	}
}

// GET ALL
export async function getAllLessons({
	query,
	limit = 6,
	page,
	category,
}: GetAllLessonsParams) {
	try {
		await connectToDatabase()

		const titleCondition = query
			? { title: { $regex: query, $options: 'i' } }
			: {}
		const categoryCondition = category
			? await getCategoryByName(category)
			: null
		const conditions = {
			$and: [
				titleCondition,
				categoryCondition ? { category: categoryCondition._id } : {},
			],
		}

		const skipAmount = (Number(page) - 1) * limit
		const lessonsQuery = Lesson.find(conditions)
			.sort({ createdAt: 'desc' })
			.skip(skipAmount)
			.limit(limit)

		const lessons = await populateLesson(lessonsQuery)
		const lessonsCount = await Lesson.countDocuments(conditions)

		return {
			data: JSON.parse(JSON.stringify(lessons)),
			totalPages: Math.ceil(lessonsCount / limit),
		}
	} catch (error) {
		handleError(error)
	}
}

// GET LESSONS BY ORGANIZER
export async function getLessonsByUser({
	userId,
	limit = 6,
	page,
}: GetLessonsByUserParams) {
	try {
		await connectToDatabase()

		const conditions = { organizer: userId }
		const skipAmount = (page - 1) * limit

		const lessonsQuery = Lesson.find(conditions)
			.sort({ createdAt: 'desc' })
			.skip(skipAmount)
			.limit(limit)

		const lessons = await populateLesson(lessonsQuery)
		const lessonsCount = await Lesson.countDocuments(conditions)

		return {
			data: JSON.parse(JSON.stringify(lessons)),
			totalPages: Math.ceil(lessonsCount / limit),
		}
	} catch (error) {
		handleError(error)
	}
}

// GET RELATED LESSONS: LESSONS WITH SAME CATEGORY
export async function getRelatedLessonsByCategory({
	categoryId,
	lessonId,
	limit = 3,
	page = 1,
}: GetRelatedLessonsByCategoryParams) {
	try {
		await connectToDatabase()

		const skipAmount = (Number(page) - 1) * limit
		const conditions = {
			$and: [{ category: categoryId }, { _id: { $ne: lessonId } }],
		}

		const lessonsQuery = Lesson.find(conditions)
			.sort({ createdAt: 'desc' })
			.skip(skipAmount)
			.limit(limit)

		const lessons = await populateLesson(lessonsQuery)
		const lessonsCount = await Lesson.countDocuments(conditions)

		return {
			data: JSON.parse(JSON.stringify(lessons)),
			totalPages: Math.ceil(lessonsCount / limit),
		}
	} catch (error) {
		handleError(error)
	}
}
