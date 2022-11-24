import useFetchGifs from "../Hooks/useFetchGifs"
import GifItem from "./GifItem"
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
              // title={image.title}
              // url={image.url}
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid