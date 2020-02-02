import React from 'react'
import { navigateTo } from '../../utils/router'

const Header = () => (
    <div className="header-main">
        <h1 className="site-title" onClick={() => navigateTo('/')}>Truecaller Blog</h1>
    </div>
)

export default React.memo(Header)
