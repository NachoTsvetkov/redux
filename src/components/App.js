import React from 'react'
import Footer from './Footer'
import AddTodo from './AddToDo'
import VisibleTodoList from '../containers/VisibleToDoList'

const App = ({ match: { params } }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer />
    </div>
  )
}

export default App