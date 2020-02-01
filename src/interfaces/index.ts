export interface IAPIState<T> {
    data: T
    isLoading: boolean
}

export interface ITopTagsResponse {
    tags: Array<{
        ID: number
        name: string
        slug: string
        description: string
        post_count: number
    }>
}

export interface ITopTag {
    name: string
    slug: string
}

export interface ICategoriesResponse {
    categories: Array<{
        ID: number
        name: string
        slug: string
        description: string
        post_count: number
        parent: number
    }>
}

export interface ICategory {
    name: string
    slug: string
}
