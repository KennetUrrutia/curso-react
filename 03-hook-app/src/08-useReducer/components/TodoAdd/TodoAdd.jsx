import useForm from "../../../hooks/useForm"

const  TodoAdd = ({ onNewTodo }) => {

  const { description, handleChange, onResetForm } = useForm({
    description: '',
  })

  const onFormSubmit = (event) => {
    event.preventDefault()

    if(description.length <=1 ) return
    const newTodo = {
      id: new Date().getTime() * 5,
      description: description,
      done: false
    }
    onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        name='description'
        type='text'
        placeholder='Que hay que hacer?'
        className='form-control'
        value={description}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-1'
      >
        Agregaar
      </button>
    </form>
  )
}

export default TodoAdd