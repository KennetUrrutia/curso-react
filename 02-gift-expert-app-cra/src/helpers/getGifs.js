import axios from "axios"

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=kzujeD8IMA6My3gnQp77EtSv8uEu7vmX&q=${category}&limit=10`

  const resp = await axios.get(url)
  const { data } = resp.data

  const gifs = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium,
  }))

  return gifs
}

export default getGifs