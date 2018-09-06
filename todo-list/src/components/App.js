import React from 'react'
import VisibleTodoList from '../containers/VisibleToDoList'

const App = () => (
  <div>
    <VisibleTodoList listId="1" />
    <VisibleTodoList listId="2" />
    <VisibleTodoList listId="3" />
  </div>
)

export default App