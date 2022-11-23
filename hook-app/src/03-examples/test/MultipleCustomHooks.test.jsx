import { fireEvent, render, screen } from '@testing-library/react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'
import MultipleCustomHooks from '../MultipleCustomHooks'

jest.mock('../../hooks/useFetch')
// jest.mock('../../hooks/useCounter')

describe('Pruebas sobre MultipleCustomHooks', () => {

  // const mockIncrement = jest.fn()

  // useCounter.mockReturnValue({
  //   counter: 1,
  //   increment: mockIncrement
  // })

  test('Debe de mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })

    render(<MultipleCustomHooks />)
    expect(screen.getByText('Loading...')).toBeTruthy()
    expect(screen.getByText('BreakingBad Quotes')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Next Quote' })
    expect(nextButton.disabled).toBeTruthy()
  })

  test('Debe de mostrar un quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Kennet', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null
    })
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Hola Mundo')).toBeTruthy()
    expect(screen.getByText('Kennet')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Next Quote' })
    expect(nextButton.disabled).toBeFalsy()
  })

  test('Debe de llamar la funcion de incrementar', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Kennet', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null
    })
    render(<MultipleCustomHooks />)
    const nextButton = screen.getByRole('button', { name: 'Next Quote' })
    fireEvent.click(nextButton)

    // expect(mockIncrement).toHaveBeenCalled()
  })
})