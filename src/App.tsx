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
                        <Categories/>
                        <TopTags/>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default App

