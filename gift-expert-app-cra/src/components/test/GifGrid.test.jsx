import { render, screen } from "@testing-library/react"
import GifGrid from "../GifGrid"
import useFetchGifs from '../../Hooks/useFetchGifs'

jest.mock('../../Hooks/useFetchGifs')

describe('Pruebas en el GifGrid', () => {
  const category = 'One Punch'

  test('Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images:[],
      isLoading: true
    })
    
    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
  });
  })

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'http://localhost/saitama.jpg',
      },
      {
        id: 'EFG',
        title: 'GOKU',
        url: 'http://localhost/saitama.jpg',
      },
    ]
    
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    })

    render( <GifGrid category={ category } /> );
    expect( screen.getAllByRole('img').length ).toBe(2);
  })
})