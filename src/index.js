import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import todoApp from './reducers'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
  } from './actions'

const store = createStore(todoApp)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();