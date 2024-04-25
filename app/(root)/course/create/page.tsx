import EventForm from '@/src/shared/shared/EventForm'
import { auth } from '@clerk/nextjs'

const CreateLessons = () => {
	const { sessionClaims } = auth()

	const userId = sessionClaims?.userId as string

	return (
		<>
			<h3 className='wrapper h3-bold text-center sm:text-left'>
				Create Course
			</h3>

			<div className='wrapper my-8'>
				<EventForm userId={userId} type='Create' />
			</div>
		</>
	)
}

export default CreateLessons
