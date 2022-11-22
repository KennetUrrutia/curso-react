import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../AddCategory"

describe('Pruebas en AddCategory', () => {
  test('debe de cambiar el valor de la ccaja de texto', () => {
    render(
      <AddCategory onAddCategory={() => { }} />
    )

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Saitama' } })

    expect(input.value).toBe('Saitama')
  })

  test('debe de llamar onNewCategory si el input tiene algún valor', () => {
    const inputValue = 'Saitama'
    const onNewCategory = jest.fn()


    render(
      <AddCategory onAddCategory={onNewCategory} />
    )

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('no debe de llamar en OnNewCategory si está vacío', () => {
    const onNewCategory = jest.fn()
    render(
      <AddCategory onAddCategory={onNewCategory} />
    )

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(onNewCategory).not.toHaveBeenCalledTimes()
  })

})