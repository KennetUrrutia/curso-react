import { useEffect } from 'react'
import useForm from '../hooks/useForm'
import Message from './Message'

const FormWithCustomHook = () => {

  const { formState, handleChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  })

  const { username, email, password } = formState
  
  useEffect(() => {
    // console.log('useEffect called')
  }, [])

  useEffect(() => {
    // console.log('formState changed')
  }, [formState])

  useEffect(() => {
    // console.log('Email changed')
  }, [email])

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        onChange={handleChange}
        value={username}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='Email'
        name='email'
        onChange={handleChange}
        value={email}
      />
      <input
        type='password'
        className='form-control mt-2'
        placeholder='Password'
        name='password'
        onChange={handleChange}
        value={password}
      />

      <button className='btn btn-primary mt-2' onClick={onResetForm}>Borrar</button>
      {
        username !== 'kenneturrutia' &&
        <Message />
      }
    </>
  )
}

export default FormWithCustomHook