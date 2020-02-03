import React  from 'react'
import { IBlogFeed } from '../../interfaces'
import { timeInAge } from '../../utils/common'
import { navigateTo } from '../../utils/router'

const BlogPost = ({post, showCompletePost = false}: {post: IBlogFeed, showCompletePost?: boolean}) => {
    return (
        <article className="article-content" >
            <header>
                {
                    post.featured_image && 
                    (<img src={`${post.featured_image}`} alt="Post Thumbnail" className="post-thumbnail"/>)
                }
                <div className="article-category-wrapper">
                    {
                        Object.keys(post.categories).map(
                            (category) => (
                                <div 
                                    className="article-category"
                                    key={category}
                                    onClick={
                                        () => navigateTo(
                                            `/category/${post.categories[category]['slug']}`
                                        )
                                    }
                                >
                                    {category}
                                </div>
                            )
                        )
                    }
                </div>
                <h2 className="post-title">
                    { post.title }
                </h2>
            </header>
            <footer className="post-meta-container">
                <div className="post-meta">
                    { timeInAge(new Date(post.date)) }
                </div>
                <div className="post-meta">
                    { post.author.name }
                </div>
            </footer>
            <div className="content-section">
                <div dangerouslySetInnerHTML={
                    { __html: post[showCompletePost ? 'content' : 'excerpt'] }
                } />
            </div>
            <div className="article-category-wrapper">
                    {
                        Object.keys(post.tags).map(
                            (tag) => (
                                <div 
                                    className="article-tag"
                                    key={tag}
                                    onClick={
                                        () => navigateTo(
                                            `/tag/${post.tags[tag]['slug']}`
                                        )
                                    }
                                >
                                    {tag}
                                </div>
                            )
                        )
                    }
                </div>
        </ article >
    )
}

export default BlogPost
