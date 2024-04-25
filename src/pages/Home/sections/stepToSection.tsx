type Props = {}

const stats = [
	{
		id: 1,
		heading: 'Flexible Learning Schedule',
		description:
			'Fit your coursework around your existing commitments and obligations.',
	},
	{
		id: 2,
		heading: 'Expert Instruction',
		description:
			'Learn from industry experts who have hands-on experience in design and development.',
	},
	{
		id: 3,
		heading: 'Diverse Course Offerings',
		description:
			'Explore a wide range of design and development courses covering various topics.',
	},
	{
		id: 4,
		heading: 'Updated Curriculum',
		description:
			'Access courses with up-to-date content reflecting the latest trends and industry practices.',
	},
	{
		id: 5,
		heading: 'Practical Projects and Assignments',
		description:
			'Develop a portfolio showcasing your skills and abilities to potential employers.',
	},
	{
		id: 6,
		heading: 'Interactive Learning Environment',
		description:
			'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
	},
]

const StepToSection = (props: Props) => {
	function padNum(num: number): string {
		return num.toString().padStart(2, '0')
	}
	return (
		<div className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
			<div className='mx-auto max-w-2xl lg:max-w-none'>
				<div className=''></div>
				<dl className='mt-16 grid grid-cols-1 gap-5 overflow-hidden   sm:grid-cols-2 lg:grid-cols-3'>
					{stats.map(stat => (
						<div
							key={stat.id}
							className=' gap-8 rounded-[56px]   bg-[#F7F7F8] p-12'
						>
							<p className='text-right text-7xl font-extrabold'>
								{padNum(stat.id)}
							</p>
							<h2 className=' text-xl font-medium'>{stat.heading}</h2>
							<dt className='text-left col-span-2 text-sm font-light leading-6 '>
								{stat.description}
							</dt>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}

export default StepToSection
