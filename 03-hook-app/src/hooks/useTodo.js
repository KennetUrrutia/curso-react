import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  const handleNewTodo = (value) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: value
    }
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id,
    }
    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id
    }
    dispatch(action)
  }

  const todosCount = (todos) => {
    return todos.length
  }

  const pendingTodosCount = (todos) => {
    return todos.filter(todo => !todo.done).length
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount,
    pendingTodosCount,
  }
}

export default useTodo