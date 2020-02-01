export interface ITopTagsResponse {
    /**
     *  API response of top tags
     */
    tags: Array<{
        ID: number
        name: string
        slug: string
        description: string
        post_count: number
    }>
}



