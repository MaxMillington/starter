import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import reducers from './app/reducers'
import ConnectedHome from './app/home/containers/ConnectedHome'

import './app/bundle.scss'

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger')

  const logger = createLogger({

    collapsed: true,

    titleFormatter: (action, time, took) => (
      `action ${action.metaType || action.type} (in ${took.toFixed(2)} ms)`
    )

  })

  middleware.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => { window.scrollTo(0, 0) }}>
      <Route path="/" component={ConnectedHome}>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'))

registerServiceWorker();