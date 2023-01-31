import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../store/auth'

export const useForm = (initialValues = {}) => {
  const dispatch = useDispatch()
  const [formState] = useState(initialValues)

  const form = useFormik({
    initialValues,
    // validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => console.log(values),
  })

  const handleChange = (e) => {
    form.setFieldError(e.target.name, undefined)
    form.handleChange(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(checkingAuthentication())
    // form.handleSubmit()
  }
  
  const handleGoogleSubmit = (e) => {
    dispatch(startGoogleSignIn())
  }

  return {
    ...formState,
    form,
    handleChange,
    handleSubmit,
    handleGoogleSubmit
  }
}