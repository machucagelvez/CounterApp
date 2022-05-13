import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 666 }) => {
  const [counter, setCounter] = useState(value)
  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1)
    // También se puede pasar una función:
    // setCounter((c) => c + 1)
    // c es el valor que recibe setCounter, es decir, counter
  }

  const handleSubtract = () => setCounter(counter - 1)

  const handleReset = () => setCounter(value)

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      {/* Es lo mismo que (e) => {handleAdd(e)} porque el argumento que se recibe es el mismo que se envía en la función que está adentro*/}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

export default CounterApp
