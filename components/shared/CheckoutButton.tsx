'use client'

import { ILessons } from '@/lib/database/models/lesson.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '../ui/button'
import Checkout from './Checkout'

const CheckoutButton = ({ lessons }: { lessons: ILessons }) => {
	const { user } = useUser()
	const userId = user?.publicMetadata.userId as string
	const hasLessonsFinished = new Date(lessons.endDateTime) < new Date()

	return (
		<div className='flex items-center gap-3'>
			{hasLessonsFinished ? (
				<p className='p-2 text-red-400'>
					Sorry, tickets are no longer available.
				</p>
			) : (
				<>
					<SignedOut>
						<Button asChild className='button rounded-full' size='lg'>
							<Link href='/sign-in'>Get Tickets</Link>
						</Button>
					</SignedOut>

					<SignedIn>
						<Checkout lessons={lessons} userId={userId} />
					</SignedIn>
				</>
			)}
		</div>
	)
}

export default CheckoutButton
