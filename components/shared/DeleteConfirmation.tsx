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
} from '@/components/ui/alert-dialog'

import { deleteLessons } from '@/lib/actions/lesson.actions'

export const DeleteConfirmation = ({ lessonsId }: { lessonsId: string }) => {
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
						This will permanently delete this lessons
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>

					<AlertDialogAction
						onClick={() =>
							startTransition(async () => {
								await deleteLessons({ lessonsId, path: pathname })
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
