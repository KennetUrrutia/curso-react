import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if( inputValue.trim().length <= 1) return

    setInputValue('')
    onAddCategory(inputValue.trim())
  }

  return (
    <>
      <form action='#' onSubmit={handleSubmit} aria-label={"form"}>
        <input
          type='text'
          id="category"
          placeholder="Ingrese una categoría"
          onChange={handleChange}
          value={inputValue}
          required
        />
        {/* <button type="submit">agregar</button> */}
      </form>
    </>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
}

export default AddCategory