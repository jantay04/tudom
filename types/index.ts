// ====== USER PARAMS
export type CreateUserParams = {
	clerkId: string
	firstName: string
	lastName: string
	username: string
	email: string
	photo: string
}

export type UpdateUserParams = {
	firstName: string
	lastName: string
	username: string
	photo: string
}

// ====== LESSON PARAMS
export type CreateLessonParams = {
	userId: string
	lesson: {
		title: string
		description: string
		location: string
		imageUrl: string
		startDateTime: Date
		endDateTime: Date
		categoryId: string
		price: string
		isFree: boolean
		url: string
	}
	path: string
}

export type UpdateLessonParams = {
	userId: string
	lesson: {
		_id: string
		title: string
		imageUrl: string
		description: string
		location: string
		startDateTime: Date
		endDateTime: Date
		categoryId: string
		price: string
		isFree: boolean
		url: string
	}
	path: string
}

export type DeleteLessonParams = {
	lessonId: string
	path: string
}

export type GetAllLessonsParams = {
	query: string
	category: string
	limit: number
	page: number
}

export type GetLessonsByUserParams = {
	userId: string
	limit?: number
	page: number
}

export type GetRelatedLessonsByCategoryParams = {
	categoryId: string
	lessonId: string
	limit?: number
	page: number | string
}

export type Lesson = {
	_id: string
	title: string
	description: string
	price: string
	isFree: boolean
	imageUrl: string
	location: string
	startDateTime: Date
	endDateTime: Date
	url: string
	organizer: {
		_id: string
		firstName: string
		lastName: string
	}
	category: {
		_id: string
		name: string
	}
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
	categoryName: string
}

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
	lessonTitle: string
	lessonId: string
	price: string
	isFree: boolean
	buyerId: string
}

export type CreateOrderParams = {
	stripeId: string
	lessonId: string
	buyerId: string
	totalAmount: string
	createdAt: Date
}

export type GetOrdersByLessonParams = {
	lessonId: string
	searchString: string
}

export type GetOrdersByUserParams = {
	userId: string | null
	limit?: number
	page: string | number | null
}

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
	params: string
	key: string
	value: string | null
}

export type RemoveUrlQueryParams = {
	params: string
	keysToRemove: string[]
}

export type SearchParamProps = {
	params: { id: string }
	searchParams: { [key: string]: string | string[] | undefined }
}
