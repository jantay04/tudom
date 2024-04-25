import PanelNavbar from '@/src/widgets/Panel/PanelNavbar'
import PanelSidebar from '@/src/widgets/Panel/PanelSidebar/PanelSidebar'
import { ReactNode } from 'react'

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<div className='relative'>
			<PanelSidebar />
			<div className='lg:pl-72'>
				<PanelNavbar />
				<main className='py-10'>
					<div className='px-4 sm:px-6 lg:px-8'>{children}</div>
				</main>
			</div>
		</div>
	)
}

export default RootLayout
