import CallList from '@/src/entities/CallList'

const PreviousPage = () => {
	return (
		<section className='flex size-full flex-col gap-10 '>
			<h1 className='text-3xl font-bold'>Previous Calls</h1>

			<CallList type='ended' />
		</section>
	)
}

export default PreviousPage
