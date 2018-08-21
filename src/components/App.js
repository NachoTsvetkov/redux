import React from 'react'
import Footer from './Footer'
import AddTodo from './AddToDo'
import VisibleTodoList from '../containers/VisibleToDoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App