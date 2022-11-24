import React from 'react'
import PropTypes from 'prop-types'

const GifItem = ({ title, url, id }) => {

  let url2 = url.url

  return (
    <div className='card'>
      {url2 ?
        <img src={url2} alt={title} />
        :
        <img src={url} alt={title} />
      }
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifItem