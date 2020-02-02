import React  from 'react'
import { navigateTo } from '../../utils/router'
import { IBlogFeed } from '../../interfaces'

const BlogPost = ({post}: {post: IBlogFeed}) => {
    return (
        < article className="topcontent " >
            <header>
                {
                    post.featured_image && 
                    (<img src={`${post.featured_image}`} alt="Post Thumbnail" className="post-thumbnail"/>)
                }
                <h2 className="post-title">
                    { post.title }
                </h2>
            </header>
            <footer className="post-time">
                {post.date}
            </footer>
            <div className="content-section">
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
        </ article >
    )
}

export default BlogPost
