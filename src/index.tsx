import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <Route
            key="home"
            path="/post/:postId"
            component={() => <App msg="reload"/>}
        />
        <Route
            key="post"
            path="/"
            component={() => <App msg="asfaf"/>}
        />
    </Router>, 
    document.getElementById('root')
)
