import React from 'react'
import './css/index.css'
import Home from './components/home/Home'
import Post from './components/post/Post'
import { Router, Route, Switch } from 'react-router-dom'
import Header from './components/common/Header'
import Categories from './components/common/Categories'
import TopTags from './components/common/TopTags'
import Footer from './components/common/Footer'
import { history } from './utils/router'


const App = () => {
    return (
            <div>
                <Header/>
                <div id="container">
                    <div className="containt-section">
                        <Router history={history}>
                            <Switch>
                                <Route path="/post/:postId">
                                    <Post />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                    <div className="side-bar">
                        <div className="categories-container">
                            <h2> Categories </h2>
                            <Categories/>
                        </div>
                        <div className="top-tags-container">
                            <h2> Top Tags </h2>
                            <TopTags/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        
    )
}

export default App

