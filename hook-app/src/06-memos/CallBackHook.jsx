import { useCallback } from 'react'
import { useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {
  const [counter, setCounter] = useState(10)

  const increment = useCallback((val) => {
    setCounter( (value) => value + val)
  }, [])

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  )
}

export default CallBackHook