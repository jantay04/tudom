import { getEventsByUser } from '@/src/shared/lib/actions/event.actions'
import { getOrdersByUser } from '@/src/shared/lib/actions/order.actions'
import { IOrder } from '@/src/shared/lib/database/models/order.model'
import Collection from '@/src/shared/shared/Collection'
import { SearchParamProps } from '@/src/shared/types'
import { Button } from '@/src/shared/ui/button'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
	const { sessionClaims } = auth()
	const userId = sessionClaims?.userId as string

	const ordersPage = Number(searchParams?.ordersPage) || 1
	const eventsPage = Number(searchParams?.eventsPage) || 1

	const orders = await getOrdersByUser({ userId, page: ordersPage })

	const orderedEvents = orders?.data.map((order: IOrder) => order.event) || []
	const organizedEvents = await getEventsByUser({ userId, page: eventsPage })

	return (
		<>
			{/* My Lessons */}
			<section className='py-5 md:py-10'>
				<div className='wrapper flex items-center justify-center sm:justify-between'>
					<h3 className='h3-bold text-center sm:text-left'>My Lessons</h3>
					<Button asChild size='lg' className='button hidden sm:flex'>
						<Link href='/#lessons'>Explore More Lessons</Link>
					</Button>
				</div>
			</section>

			<section className='wrapper my-8'>
				<Collection
					data={orderedEvents}
					emptyTitle="You don't have planning lessons"
					emptyStateSubtext='No worries - plenty of exciting lessons to explore!'
					collectionType='My_Tickets'
					limit={3}
					page={ordersPage}
					urlParamName='ordersPage'
					totalPages={orders?.totalPages}
				/>
			</section>

			{/* Events Organized */}
			<section className='py-5 md:py-10'>
				<div className='wrapper flex items-center justify-center sm:justify-between'>
					<h3 className='h3-bold text-center sm:text-left'>
						Lessons Organized
					</h3>
					<Button asChild size='lg' className='button hidden sm:flex'>
						<Link href='/lessons/create'>Create New lesson</Link>
					</Button>
				</div>
			</section>

			<section className='wrapper my-8'>
				<Collection
					data={organizedEvents?.data}
					emptyTitle='No lessons have been created yet'
					emptyStateSubtext='Go create some now'
					collectionType='Events_Organized'
					limit={3}
					page={eventsPage}
					urlParamName='eventsPage'
					totalPages={organizedEvents?.totalPages}
				/>
			</section>
		</>
	)
}

export default ProfilePage
