import React from 'react'
import './css/index.css'
import Home from './components/home/Home'
import Post, { IPostProps } from './components/post/Post'
import { Router, Route, RouteComponentProps } from 'react-router'
import { createBrowserHistory } from "history"
import ErrorBoundary from './components/common/ErrorBoundary'
import Header from './components/common/Header'
import Categories from './components/common/Categories'
import TopTags from './components/common/TopTags'
import Footer from './components/common/Footer'

const App = () => {
    const history = createBrowserHistory()
    return (
        <ErrorBoundary>
            <div>
                <Header/>
                <div id="container">
                    <div className="containt-section">
                        <Router history={history}>
                            <Route
                                key="post"
                                path="/post/:postId"
                                component={
                                    (props: RouteComponentProps<IPostProps>) => <Post postId={props.match.params.postId}/>
                                }
                            />
                            <Route
                                key="home"
                                path="/"
                                component={() => <Home msg="reload"/>}
                            />
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
        </ErrorBoundary>
    )
}

export default App

