import { useMemo } from 'react'
import { useState } from 'react'
import useCounter from '../hooks/useCounter'

const heavyStuff = (internalNumber = 100) => {
  for (let i = 0; i < internalNumber; i++) {
    console.log('ahí vamos')
  }
  return `${internalNumber} interacciones realizadas`
}

const MemoHook = () => {
  const { increment, counter } = useCounter(4000)
  const [show, setShow] = useState(true)

  const memorizeValue = useMemo(() => {
    heavyStuff(counter)
  },[counter])

  return (
    <>
      <h1> Counter: <small>{counter}</small> </h1>
      <hr />
      <h4>{memorizeValue}</h4>
      <button
        className='btn btn-primary'
        onClick={() => increment(1)}
      >
        +1
      </button>

      <button
        className='btn btn-outline-primary'
        onClick={() => setShow(!show)}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default MemoHook