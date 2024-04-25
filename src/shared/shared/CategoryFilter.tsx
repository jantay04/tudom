'use client'

import { getAllCategories } from '@/src/shared/lib/actions/category.actions'
import { ICategory } from '@/src/shared/lib/database/models/category.model'
import { formUrlQuery, removeKeysFromQuery } from '@/src/shared/lib/utils'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/src/shared/ui/select'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const CategoryFilter = () => {
	const [categories, setCategories] = useState<ICategory[]>([])
	const router = useRouter()
	const searchParams = useSearchParams()

	useEffect(() => {
		const getCategories = async () => {
			const categoryList = await getAllCategories()

			categoryList && setCategories(categoryList as ICategory[])
		}

		getCategories()
	}, [])

	const onSelectCategory = (category: string) => {
		let newUrl = ''

		if (searchParams) {
			if (category && category !== 'All') {
				newUrl = formUrlQuery({
					params: searchParams.toString(),
					key: 'category',
					value: category,
				})
			} else {
				newUrl = removeKeysFromQuery({
					params: searchParams.toString(),
					keysToRemove: ['category'],
				})
			}
		} else {
			// Handle the case when searchParams is null
			// For example, set newUrl to some default value or handle it in some other way
			newUrl = '' // or any default value you want
		}

		router.push(newUrl, { scroll: false })
	}

	return (
		<Select onValueChange={(value: string) => onSelectCategory(value)}>
			<SelectTrigger className='select-field'>
				<SelectValue placeholder='Category' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='All' className='select-item p-regular-14'>
					All
				</SelectItem>

				{categories.map(category => (
					<SelectItem
						value={category.name}
						key={category._id}
						className='select-item p-regular-14'
					>
						{category.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}

export default CategoryFilter
