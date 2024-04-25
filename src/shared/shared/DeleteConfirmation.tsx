'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTransition } from 'react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/src/shared/ui/alert-dialog'

import { deleteEvent } from '@/src/shared/lib/actions/event.actions'

export const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
	const pathname = usePathname()
	let [isPending, startTransition] = useTransition()

	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Image
					src='/assets/icons/delete.svg'
					alt='edit'
					width={20}
					height={20}
				/>
			</AlertDialogTrigger>

			<AlertDialogContent className='bg-white'>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
					<AlertDialogDescription className='p-regular-16 text-grey-600'>
						This will permanently delete this event
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={() =>
							startTransition(async () => {
								if (pathname !== null) {
									await deleteEvent({ eventId, path: pathname })
								} else {
									console.error('Pathname is null')
								}
							})
						}
					>
						{isPending ? 'Deleting...' : 'Delete'}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
