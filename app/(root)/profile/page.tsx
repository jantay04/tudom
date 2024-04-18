import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getLessonsByUser } from '@/lib/actions/lesson.actions'
import { getOrdersByUser } from '@/lib/actions/order.actions'
import { IOrder } from '@/lib/database/models/order.model'
import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
	const { sessionClaims } = auth()
	const userId = sessionClaims?.userId as string

	const ordersPage = Number(searchParams?.ordersPage) || 1
	const lessonsPage = Number(searchParams?.lessonsPage) || 1

	const orders = await getOrdersByUser({ userId, page: ordersPage })

	const orderedLessons = orders?.data.map((order: IOrder) => order.lesson) || []
	const organizedLessons = await getLessonsByUser({ userId, page: lessonsPage })

	return (
		<>
			{/* My Tickets */}
			<section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
				<div className='wrapper flex items-center justify-center sm:justify-between'>
					<h3 className='h3-bold text-center sm:text-left'>My Tickets</h3>
					<Button asChild size='lg' className='button hidden sm:flex'>
						<Link href='/#lessons'>Explore More Lessons</Link>
					</Button>
				</div>
			</section>

			<section className='wrapper my-8'>
				<Collection
					data={orderedLessons}
					emptyTitle='No lesson tickets purchased yet'
					emptyStateSubtext='No worries - plenty of exciting lessons to explore!'
					collectionType='My_Tickets'
					limit={3}
					page={ordersPage}
					urlParamName='ordersPage'
					totalPages={orders?.totalPages}
				/>
			</section>

			{/* Lessons Organized */}
			<section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
				<div className='wrapper flex items-center justify-center sm:justify-between'>
					<h3 className='h3-bold text-center sm:text-left'>
						Lessons Organized
					</h3>
					<Button asChild size='lg' className='button hidden sm:flex'>
						<Link href='/lessons/create'>Create New Lesson</Link>
					</Button>
				</div>
			</section>

			<section className='wrapper my-8'>
				<Collection
					data={organizedLessons?.data}
					emptyTitle='No lessons have been created yet'
					emptyStateSubtext='Go create some now'
					collectionType='Lessons_Organized'
					limit={3}
					page={lessonsPage}
					urlParamName='lessonsPage'
					totalPages={organizedLessons?.totalPages}
				/>
			</section>
		</>
	)
}

export default ProfilePage
