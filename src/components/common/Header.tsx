import React from 'react'
import { navigateTo } from '../../utils/router'

const Header = () => (
    <div className="header-main">
        <div className="header-title">
            <h1 className="site-title" onClick={() => navigateTo('/')}>Truecaller Blog</h1>
        </div>
        <header className="header-image-container">
            <img 
            src="https://truecaller.blog/wp-content/uploads/2017/03/cropped-blog-header.png" 
            alt="Truecaller Header"
            />
        </header>
    </div>
)

export default React.memo(Header)
