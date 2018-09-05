import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import configureStore from './configureStore'

const store = configureStore();

const renderApp = () => render(
  <Root store={store} />,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/Root', () => {
    renderApp()
  })
}

renderApp()