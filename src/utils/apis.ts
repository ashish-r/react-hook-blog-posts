import { useState, useEffect } from 'react'
import { get } from "./common"
import * as urls from "../constants/urls"
import { ITopTagsResponse, ITopTag, ICategoriesResponse, ICategory, IAPIState } from "../interfaces"

export function useGetCategories(): IAPIState<ICategory[] | undefined> {
    const [categories, setCategories] = useState<IAPIState<ICategory[] | undefined>>(
        {isLoading: true, data: undefined}
    )

    useEffect(() => {
        (async() => {
            const response: ICategoriesResponse | undefined = await get(urls.CATEGORIES)
            setCategories(
                {
                    isLoading: false, 
                    data: response && response.categories && response.categories.map(
                        ({name, slug}) => ({name, slug})
                    ),
                }
            )
        })()
    }, [])

    return { ...categories }
}

export function useGetTopTags(): IAPIState<ITopTag[] | undefined> {
    const [topTags, setCategories] = useState<IAPIState<ITopTag[] | undefined>>(
        {isLoading: true, data: undefined}
    )

    useEffect(() => {
        (async() => {
            const response: ITopTagsResponse | undefined = await get(urls.TAGS)
            setCategories(
                {
                    isLoading: false, 
                    data: response && response.tags && response.tags.map(
                        ({name, slug}) => ({name, slug})
                    ),
                }
            )
        })()
    }, [])

    return { ...topTags }
}
