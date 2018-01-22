import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './app/reducers'

// import './app/components/bundle.scss'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => { window.scrollTo(0, 0) }}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'))

registerServiceWorker();