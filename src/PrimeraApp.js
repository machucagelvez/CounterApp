import React from 'react'
import PropTypes from 'prop-types'

//FC (Funcional Components)
const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* Imprime un objeto: */}
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{subtitulo}</p>
    </>
  )
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired, //Define el tipo de prop y que sea requerido
}

//Configurar valores por defeecto de las props:
PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtítulo',
}

export default PrimeraApp
