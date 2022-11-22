import { memo } from "react"

const Small = ({ value }) => {

  console.log('me volvi a generar')
  return (
    <small>{value}</small>
  )
}

export default memo(Small)