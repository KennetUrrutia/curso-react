import { render, screen } from "@testing-library/react"
import FirstApp from "../components/FirstApp"

describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola soy Kennet'
  const subTitle = 'Hola, soy un subtitulo'

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    )

    expect(container).toMatchSnapshot() //Crear un snapshot
  })

  test('debe de mostrar el mensaje de "Hola, soy Kennet"', () => {
    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    )

    expect(screen.getByText(title)).toBeTruthy() // toBeTruthy es para ver si existe

  })

  test('debe de mostrar el titulo en un h1', () => {
    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    )
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    )

    expect(screen.getAllByText(subTitle).length).toBe(2)

  })
})