import CategoryFilter from '@/components/shared/CategoryFilter'
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search'
import { Button } from '@/components/ui/button'
import { getAllLessons } from '@/lib/actions/lesson.actions'
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import bannerPhoto from '../../public/assets/banner1.png'

export default async function Home({ searchParams }: SearchParamProps) {
	const page = Number(searchParams?.page) || 1
	const searchText = (searchParams?.query as string) || ''
	const category = (searchParams?.category as string) || ''

	const lessons = await getAllLessons({
		query: searchText,
		category,
		page,
		limit: 6,
	})

	return (
		<>
			<section className='bg-contain py-5 md:py-10 wrapper'>
				<div className='bg-black min-h-[calc(70vh)] rounded-[56px]  grid grid-cols-2 overflow-hidden text-white'>
					<div className=' bg-black py-20 px-10'>
						<h1 className='text-3xl font-bold'>
							Tudom is an international platform
						</h1>
						<p className=' text-xl mt-4'>
							That provides optimized solution for finding and matching with any
							mentor/teacher across the world with transparent payment methods.
							Also, contains easier access to universities admission information
							and helps them to attract graduates efficiently.
						</p>
						<button className='mt-10 bg-white text-black font-semibold px-10 py-4 rounded-full'>
							<Link href='#courses'>Explore Coursers</Link>
						</button>
					</div>
					<div
						className='bg-center bg-cover'
						style={{
							backgroundImage: `url(${bannerPhoto.src})`,
							width: '100%',
							height: '100%',
						}}
					>
						{/* <Image
							src='/assets/banner1.png'
							alt='hero'
							width={1000}
							height={1000}
							className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
						/> */}
					</div>
				</div>
			</section>
			<section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
				<div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
					<div className='flex flex-col justify-center gap-8'>
						<h1 className='h1-bold'>
							Host, Connect, Celebrate: Your Lessons, Our Platform!
						</h1>
						<p className='p-regular-20 md:p-regular-24'>
							Book and learn helpful tips from 3,168+ mentors in world-class
							companies with our global community.
						</p>
						<Button size='lg' asChild className='button w-full sm:w-fit'>
							<Link href='#lessons'>Explore Now</Link>
						</Button>
					</div>

					<Image
						src='/assets/images/hero.png'
						alt='hero'
						width={1000}
						height={1000}
						className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
					/>
				</div>
			</section>

			<section
				id='lessons'
				className='wrapper my-8 flex flex-col gap-8 md:gap-12'
			>
				<h2 className='h2-bold'>
					Trust by <br /> Thousands of Lessons
				</h2>

				<div className='flex w-full flex-col gap-5 md:flex-row'>
					<Search />
					<CategoryFilter />
				</div>

				<Collection
					data={lessons?.data}
					emptyTitle='No Lessons Found'
					emptyStateSubtext='Come back later'
					collectionType='All_Lessons'
					limit={6}
					page={page}
					totalPages={lessons?.totalPages}
				/>
			</section>
		</>
	)
}
