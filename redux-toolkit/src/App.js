import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./store/slices/counter"

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#242443' }}>
      <header className="App-header">
        <p style={{ color: 'white' }}>
          Count is: {counter}
        </p>
        <div style={{ width: '20rem', display: 'flex', justifyContent: 'space-between' }}>
          <button type="button" onClick={() => dispatch(increment())} style={{ padding: 3, minWidth: '5rem' }}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch(decrement())} style={{ padding: 3, minWidth: '5rem' }}>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch(incrementByAmount(2))} style={{ padding: 3, minWidth: '5rem' }}>
            Increment By 2
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
