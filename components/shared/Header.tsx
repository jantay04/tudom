import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import NavItems from './NavItems'

const Header = () => {
	return (
		<header className='w-full'>
			<div className='wrapper flex items-center justify-between'>
				<div className='flex'>
					<Link href='/' className='w-36'>
						<Image
							src='/assets/images/logo.svg'
							width={128}
							height={38}
							alt='Tudom logo'
						/>
					</Link>

					<SignedIn>
						<nav className='md:flex-between hidden w-full max-w-xs'>
							<NavItems />
						</nav>
					</SignedIn>
				</div>

				<div className='flex w-32 justify-end gap-3'>
					<SignedIn>
						<UserButton afterSignOutUrl='/' />
						<MobileNav />
					</SignedIn>
					<SignedOut>
						<Button asChild className='rounded-full' size='lg'>
							<Link href='/sign-in'>Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	)
}

export default Header
