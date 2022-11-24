import GifItem from "../GifItem"
import { render, screen } from '@testing-library/react'

describe('Pruebas sobre GiftItem', () => {

  const title = 'saitama'
  const url = 'https://github.com/'

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(
      <GifItem
        title={title}
        url={url}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar la imagen co el URL y el ALT indicado', () => {
    render(
      <GifItem title ={title} url={url} />
    )

    const { src, alt } = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( alt )
  })

  test('debe de mostrar el titulo en el componente', () => {
    render(
      <GifItem title={title} url={url} />
    )

    expect( screen.getByText( title )).toBeTruthy()
  })
})