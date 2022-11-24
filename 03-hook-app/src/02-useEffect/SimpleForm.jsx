import { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'kenneturrutia',
    email: 'kenneturrutia@gmail.com',
  })

  const { username, email } = formState

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

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
      <h1>Formulario simple</h1>
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
      {
        username !== 'kenneturrutia' &&
        <Message />
      }
    </>
  )
}

export default SimpleForm