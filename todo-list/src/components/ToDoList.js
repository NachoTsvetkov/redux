import React from 'react'
import PropTypes from 'prop-types'
import Todo from './ToDo'

const TodoList = ({ todos, toggleTodo, listId }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id, listId)}
      />
    )}
  </ul>
)

export default TodoList