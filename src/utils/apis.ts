import { get } from "./common"
import * as urls from "../constants/urls"
import { ITopTagsResponse, ITopTag, ICategoriesResponse, ICategory } from "../interfaces"

export async function getTopTags(): Promise<ITopTag[] | undefined> {
    const response: ITopTagsResponse | undefined = await get(urls.TAGS)
    return response && response.tags && response.tags.map(({name, slug}) => ({name, slug}))
}

export async function getCategories(): Promise<ICategory[] | undefined> {
    const response: ICategoriesResponse | undefined = await get(urls.CATEGORIES)
    return response && response.categories && response.categories.map(({name, slug}) => ({name, slug}))
}
