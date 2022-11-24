import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (value) => {
    if (categories.includes(value)) {
      alert('El valor ya existe en el arreglo')
    } else {
      setCategories([value, ...categories])
    }
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />
        {categories.map((item) => (
          <GifGrid
            key={item}
            category={item}
          />
        ))
        }
    </>
  )
}

export default GifExpertApp