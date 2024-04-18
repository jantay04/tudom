import LessonsForm from '@/components/shared/LessonForm'
import { getLessonsById } from '@/lib/actions/lesson.actions'
import { auth } from '@clerk/nextjs'

type UpdateLessonsProps = {
	params: {
		id: string
	}
}

const UpdateLessons = async ({ params: { id } }: UpdateLessonsProps) => {
	const { sessionClaims } = auth()

	const userId = sessionClaims?.userId as string
	const lessons = await getLessonsById(id)

	return (
		<>
			<section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
				<h3 className='wrapper h3-bold text-center sm:text-left'>
					Update Lessons
				</h3>
			</section>

			<div className='wrapper my-8'>
				<LessonsForm
					type='Update'
					lessons={lessons}
					lessonsId={lessons._id}
					userId={userId}
				/>
			</div>
		</>
	)
}

export default UpdateLessons
