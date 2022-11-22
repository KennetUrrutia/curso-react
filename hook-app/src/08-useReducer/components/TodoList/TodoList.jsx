import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map(item => (
        <TodoItem key={item.id} todo={item} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
      ))}
    </ul>
  )
}

export default TodoList