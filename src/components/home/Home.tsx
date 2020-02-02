import React from 'react'
import { useGetBlogs } from '../../utils/apis'
import BlogPost from '../common/BlogPost'

const Home = () => {
  const blogFeeds = useGetBlogs({page: 1})
  return (
    <div className="feeds-container">
      <div>
        {
          blogFeeds.isLoading ? 
            (<h2>Loading...</h2>) :
            blogFeeds.data ?
            blogFeeds.data.map(blog => <BlogPost key={blog.slug} post={blog}/>) :
            (<h2>Error Loading Data!!</h2>)
        }
      </div>
    </div>
  )
}

export default Home