'use client'

import { headerLinks } from '@/src/app/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems = () => {
	const pathname = usePathname()

	return (
		<ul className='md:flex-between flex w-full flex-col items-start gap- md:flex-row'>
			{headerLinks.map(link => {
				const isActive = pathname === link.route

				return (
					<li
						key={link.route}
						className={`${
							isActive && 'bg-black/10'
						} flex-center  whitespace-nowrap font-light px-3 py-2 rounded-sm text-[#262626]`}
					>
						<Link href={link.route}>{link.label}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default NavItems
