import React, { useState, useMemo } from 'react'
import { useGetBlogs } from '../../utils/apis'
import BlogPost from '../common/BlogPost'
import { NO_OF_FFEDS } from '../../constants/configs'
import { useLocation } from 'react-router'
import { IBlogFeedsQueryParams, IGenericObject, IRootState } from '../../interfaces'
import { useGetPrevious } from '../../utils/common'
import { useSelector } from 'react-redux'

const Home = () => {
    const [page, setPage] = useState(1)
    const { pathname: locationPath } = useLocation()
    const [routeType, routeSlug] = locationPath.split('/').slice(1)
    const previousLocationPath = useGetPrevious(locationPath)
    const isPathChanged = previousLocationPath !== locationPath
    const blogFeedsParam: IBlogFeedsQueryParams = { page }
    let showPathInfo = false
    if(routeType && routeSlug) {
        (blogFeedsParam as IGenericObject<any>)[routeType] = routeSlug
        showPathInfo = true
    }
    const blogFeeds = useGetBlogs(blogFeedsParam, !isPathChanged)
    const categories = useSelector((state: IRootState) => state.blog.categories) || []
    const topTags = useSelector((state: IRootState) => state.blog.topTags) || []
    const totalPosts = useSelector((state: IRootState) => state.blog.totalBlogs) || 0
    const pathInfo = useMemo(
        () => showPathInfo ? 
            `${routeType} Archives: ${
                ((routeType == 'category' ? categories: topTags)
                .find(({slug}) => slug === routeSlug) || {})['name']
            }` :
            '',
        [routeType, routeSlug, categories, topTags]
    )
    return (
        <div className="feeds-container">
            {
                pathInfo && (
                    <h4 className="path-info">
                        {pathInfo}
                    </h4>
                )
            }
            {
                (blogFeeds.isLoading || isPathChanged) ? 
                (<h2>Loading...</h2>) :
                blogFeeds.data ?
                (<>
                    {
                        blogFeeds.data.map(
                            blog => (
                                <div key={blog.slug}>
                                    <BlogPost post={blog}/>
                                    <div>Continue Reading → </div>
                                </div>
                            )
                        )
                    }
                    {
                        (totalPosts > page * NO_OF_FFEDS) && 
                        (
                            (blogFeeds.data.length === (page - 1) * NO_OF_FFEDS) ?
                            (<button> Loading... </button>) : 
                            (<button onClick={()=>setPage(page + 1)}> Older Posts </button>)
                        )
                    }
                </>):
                (<h2>Error Loading Data!!</h2>)
            }
        </div>
    )
}

export default Home