import useTodo from '../hooks/useTodo'
import TodoAdd from './components/TodoAdd/TodoAdd'
import TodoList from './components/TodoList/TodoList'

const TodoApp = () => {
  //UseTodo
  const { todos, todosCount, pendingTodosCount,handleDeleteTodo, handleToggleTodo, handleNewTodo } =  useTodo()

  return (
    <>
      <h1>TodoApp: '{todosCount(todos)}' <small>Pendientes: '{pendingTodosCount(todos)}'</small></h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}

export default TodoApp