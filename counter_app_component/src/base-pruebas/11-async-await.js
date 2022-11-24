import axios from "axios"

export const getImagen = async () => {
    try{
        const apikey = '2aSIR9MBYaagtwsrZCJBQbaqGPXtfKmB'
        const resp = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
        const data = resp.data

        const { url } = data.data.images.original

        return url
    }catch( error ){
        console.log( error )
        return 'No se encontró la imagen'
    }
}