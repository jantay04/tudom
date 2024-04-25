import Footer from '@/src/widgets/Footer'
import Header from '@/src/widgets/Header'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex h-screen flex-col'>
			<Header />
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}
