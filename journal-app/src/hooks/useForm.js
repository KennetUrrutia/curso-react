import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../store/auth'

export const useForm = (initialValues = {}, formValidations = {}) => {
  const dispatch = useDispatch()
  const [formValidation, setFormValidation] = useState({})

  const form = useFormik({
    initialValues,
    // formValidations,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => console.log(values),
  })

  useEffect(() => {
    createValidators()
  }, [form.values])

  const isFormValid = useMemo(() => {

    for (const formValue of Object.keys(formValidation)) {
      console.log(formValue)
      if (formValidation[formValue] !== null) return false
    }

    return true
  }, [formValidation])

  const handleChange = (e) => {
    form.setFieldError(e.target.name, undefined)
    form.handleChange(e)
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(checkingAuthentication())
    form.handleSubmit()
  }

  const handleGoogleSubmit = (e) => {
    dispatch(startGoogleSignIn())
  }

  const handleResetForm = () => {
    form.handleReset()
  }

  const createValidators = () => {
    const formCheckedValues = {}

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField]

      formCheckedValues[`${formField} valid`] = fn(form.values[formField]) ? null : errorMessage

    }

    setFormValidation(formCheckedValues)
    console.log(formCheckedValues)
  }

  return {
    ...form.values,
    form,
    isFormValid,
    handleChange,
    handleSubmit,
    handleGoogleSubmit,
    handleResetForm,

    ...formValidation
  }
}