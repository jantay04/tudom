type Props = {}

const stats = [
	{
		id: 1,
		value: '76%',
		description:
			'Students are 76% more likely to enroll in a degree program that offers industry micro-credentials',
	},
	{
		id: 2,
		value: '88%',
		description:
			'of employers believe that Professional Certificates strengthen a candidate’s job application',
	},
	{
		id: 3,
		value: '90%',
		description:
			'of students agree that a Professional Certificate will help them secure a job',
	},
]

const StatsSection = (props: Props) => {
	return (
		<div className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
			<div className='mx-auto max-w-2xl lg:max-w-none'>
				<div className=''></div>
				<dl className='mt-16 grid grid-cols-1 overflow-hidden rounded-[56px] text-center sm:grid-cols-2 lg:grid-cols-3'>
					{stats.map(stat => (
						<div
							key={stat.id}
							className='grid items-center grid-cols-3 gap-8   bg-[#191919] py-8 px-6'
						>
							<dt className='text-left col-span-2 text-sm font-light leading-6 text-white'>
								{stat.description}
							</dt>
							<dd className='order-first flex items-center justify-center text-4xl font-extrabold tracking-tight text-white '>
								{stat.value}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}

export default StatsSection
