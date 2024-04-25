'use client'

import { Dialog, Transition } from '@headlessui/react'
import {
	CalendarIcon,
	ChartPieIcon,
	Cog6ToothIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	PlusIcon,
	UserIcon,
	UsersIcon,
	VideoCameraIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Fragment, useState } from 'react'

const navigation = [
	{ name: 'Dashboard', href: '/panel', icon: HomeIcon, current: true },
	{ name: 'Team', href: '#', icon: UsersIcon, current: false },
	{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
	{ name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
	{ name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
	{ name: 'Reports', href: '#', icon: ChartPieIcon, current: false },

	{
		name: 'Upcoming',
		href: '/panel/upcoming',
		icon: ChartPieIcon,
		current: false,
	},
	{
		name: 'Previous',
		href: '/panel/previous',
		icon: ChartPieIcon,
		current: false,
	},
	{
		name: 'Recordings',
		href: '/panel/recordings',
		icon: VideoCameraIcon,
		current: false,
	},
	{
		name: 'Personal Room',
		href: '/panel/personal-room',
		icon: PlusIcon,
		current: false,
	},
]
const teams = [
	{ id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
	{ id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
	{ id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
	{ name: 'Your profile', href: '#' },
	{ name: 'Sign out', href: '#' },
]

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

export default function PanelSidebar() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-50 lg:hidden'
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter='transition-opacity ease-linear duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity ease-linear duration-300'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-gray-900/80' />
					</Transition.Child>

					<div className='fixed inset-0 flex'>
						<Transition.Child
							as={Fragment}
							enter='transition ease-in-out duration-300 transform'
							enterFrom='-translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-300 transform'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-full'
						>
							<Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
								<Transition.Child
									as={Fragment}
									enter='ease-in-out duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in-out duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
										<button
											type='button'
											className='-m-2.5 p-2.5'
											onClick={() => setSidebarOpen(false)}
										>
											<span className='sr-only'>Close sidebar</span>
											<XMarkIcon
												className='h-6 w-6 text-white'
												aria-hidden='true'
											/>
										</button>
									</div>
								</Transition.Child>
								{/* Sidebar component, swap this element with another sidebar if you like */}
								<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4'>
									<div className='flex h-16 shrink-0 items-center'>
										<Image
											src='/assets/images/logo.svg'
											width={128}
											height={38}
											alt='Tudom logo'
										/>
									</div>
									<nav className='flex flex-1 flex-col'>
										<ul role='list' className='flex flex-1 flex-col gap-y-7'>
											<li>
												<ul role='list' className='-mx-2 space-y-1'>
													{navigation.map(item => (
														<li key={item.name}>
															<a
																href={item.href}
																className={classNames(
																	item.current
																		? 'bg-gray-50 text-[#3db1fc]'
																		: 'text-gray-700 hover:text-[#3db1fc] hover:bg-gray-50',
																	'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
																)}
															>
																<item.icon
																	className={classNames(
																		item.current
																			? 'text-[#3db1fc]'
																			: 'text-gray-400 group-hover:text-[#3db1fc]',
																		'h-6 w-6 shrink-0'
																	)}
																	aria-hidden='true'
																/>
																{item.name}
															</a>
														</li>
													))}
												</ul>
											</li>
											<li>
												<div className='text-xs font-semibold leading-6 text-gray-400'>
													Your teams
												</div>
												<ul role='list' className='-mx-2 mt-2 space-y-1'>
													{teams.map(team => (
														<li key={team.name}>
															<a
																href={team.href}
																className={classNames(
																	team.current
																		? 'bg-gray-50 text-[#3db1fc]'
																		: 'text-gray-700 hover:text-[#3db1fc] hover:bg-gray-50',
																	'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
																)}
															>
																<span
																	className={classNames(
																		team.current
																			? 'text-[#3db1fc] border-[#3db1fc]'
																			: 'text-gray-400 border-gray-200 group-hover:border-[#3db1fc] group-hover:text-[#3db1fc]',
																		'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
																	)}
																>
																	{team.initial}
																</span>
																<span className='truncate'>{team.name}</span>
															</a>
														</li>
													))}
												</ul>
											</li>
											<li className='mt-auto'>
												<a
													href='#'
													className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-[#3db1fc]'
												>
													<UserIcon
														className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-[#3db1fc]'
														aria-hidden='true'
													/>
													Profile
												</a>
												<a
													href='#'
													className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-[#3db1fc]'
												>
													<Cog6ToothIcon
														className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-[#3db1fc]'
														aria-hidden='true'
													/>
													Settings
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
					<div className='flex h-16 shrink-0 items-center'>
						<Image
							src='/assets/images/logo.svg'
							width={128}
							height={38}
							alt='Tudom logo'
						/>
					</div>
					<nav className='flex flex-1 flex-col'>
						<ul role='list' className='flex flex-1 flex-col gap-y-7'>
							<li>
								<ul role='list' className='-mx-2 space-y-1'>
									{navigation.map(item => (
										<li key={item.name}>
											<a
												href={item.href}
												className={classNames(
													item.current
														? 'bg-gray-50 text-[#3db1fc]'
														: 'text-gray-700 hover:text-[#3db1fc] hover:bg-gray-50',
													'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
												)}
											>
												<item.icon
													className={classNames(
														item.current
															? 'text-[#3db1fc]'
															: 'text-gray-400 group-hover:text-[#3db1fc]',
														'h-6 w-6 shrink-0'
													)}
													aria-hidden='true'
												/>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</li>
							{/* <li>
								<div className='text-xs font-semibold leading-6 text-gray-400'>
									Your teams
								</div>
								<ul role='list' className='-mx-2 mt-2 space-y-1'>
									{teams.map(team => (
										<li key={team.name}>
											<a
												href={team.href}
												className={classNames(
													team.current
														? 'bg-gray-50 text-[#3db1fc]'
														: 'text-gray-700 hover:text-[#3db1fc] hover:bg-gray-50',
													'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
												)}
											>
												<span
													className={classNames(
														team.current
															? 'text-[#3db1fc] border-[#3db1fc]'
															: 'text-gray-400 border-gray-200 group-hover:border-[#3db1fc] group-hover:text-[#3db1fc]',
														'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
													)}
												>
													{team.initial}
												</span>
												<span className='truncate'>{team.name}</span>
											</a>
										</li>
									))}
								</ul>
							</li> */}
							<li className='mt-auto'>
								<a
									href='#'
									className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-[#3db1fc]'
								>
									<UserIcon
										className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-[#3db1fc]'
										aria-hidden='true'
									/>
									Profile
								</a>
								<a
									href='#'
									className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-[#3db1fc]'
								>
									<Cog6ToothIcon
										className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-[#3db1fc]'
										aria-hidden='true'
									/>
									Settings
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	)
}
