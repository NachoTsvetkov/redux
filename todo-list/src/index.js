import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import Root from './components/Root'
import thunkMiddleware from 'redux-thunk'
import todoApp from './reducers/index'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhansers/monitorReducer'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);
const store = createStore(todoApp, undefined, composedEnhancers); 

render(
  <Root store={store} />,
  document.getElementById('root')
)