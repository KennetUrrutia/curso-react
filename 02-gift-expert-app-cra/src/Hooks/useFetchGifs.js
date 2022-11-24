import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs"

const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    await getGifs(category)
      .then(newimages => {
        setImages(newimages)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    images,
    isLoading,
  }
}

export default useFetchGifs