import { render, screen } from "@testing-library/react"
import FirstApp from "../components/FirstApp"


describe('Pruebas en <FirstApp />', () => {


    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola soy Kennet'
        const { container } = render(<FirstApp title={title} />)

        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar el titulo en un h1', () => {

        const title = 'Hola soy Kennet'
        render(
            <FirstApp
                title={title}
            />
        )

        expect( screen.getByText( title )).toBeTruthy()

        expect( screen.getByTestId('test-title').innerHTML).toContain(title)
        // const h1 = container.querySelector( 'h1' )
        // expect( h1.innerHTML ).toContain( title )

    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola soy Kennet'
        const subTitle = 'Hola, soy un subtitulo'
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        )

        expect( screen.getAllByText(subTitle).length).toBe(2)
    })

})