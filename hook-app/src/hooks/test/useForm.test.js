import { act, renderHook } from "@testing-library/react"
import useForm from "../useForm"

describe('Pruebas sobre el useForm Component', () => {

  const initialForm = {
    name: 'Kennet',
    email: 'kennetu200@gmail.com'
  }

  test('Debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      handleChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  test('Debe de cambiar el nombre del formulario', () => {
    const newValue = {
      name: 'Kennet',
    }

    //Montar el hook
    const { result } = renderHook(() => useForm(initialForm))
    const { handleChange } = result.current
    act(() => {
      handleChange({ target: { name: 'name', value: newValue } })
    })

    //expect, result.current.name === Kennet
    expect(result.current.name).toBe(newValue)
    //expect, result.current.formState.name === Kennet
    expect(result.current.formState.name).toBe(newValue)
  })

  test('Debe de realizar el reset del formulario', () => {
    const newValue = {
      name: 'Kennet',
    }

    //Montar el hook
    const { result } = renderHook(() => useForm(initialForm))
    const { handleChange, onResetForm } = result.current
    act(() => {
      handleChange({ target: { name: 'name', value: newValue } })
      onResetForm()
    })

    //expect, result.current.name === Kennet
    expect(result.current.name).toBe(initialForm.name)
    //expect, result.current.formState.name === Kennet
    expect(result.current.formState.name).toBe(initialForm.name)
  })
})