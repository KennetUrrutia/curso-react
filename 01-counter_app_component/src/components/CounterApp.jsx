import PropTypes from 'prop-types'
import { useState } from 'react'


const CounterApp = (props) => {
    const { value } = props
    const [counter, setCounter] = useState(value)

    const handleAdd = (event, value2) => {
        setCounter(counter + 1)
        // console.log(event)
        // console.log(value2)
    }
    const handleSubstract = (event) => {
        setCounter(counter -1)
    }
    
    const handleReset = () => {
        setCounter(value)
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            {/* <h1>{value}</h2> */}
            <h2>{counter}</h2>
            <button onClick={event => handleAdd(event, value)}>
                +1
            </button>
            <button onClick={event => handleSubstract(event)}>
                -1
            </button>
            <button onClick={handleReset} aria-label='btn-reset'>
                Reset
            </button>
        </>
    )
}
 
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 100,
}

export default CounterApp