import React from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'
import './index.css'

const divRoot = document.querySelector('#root') //En donde se va a renderizar
const root = createRoot(divRoot)

root.render(<CounterApp value={666} />) //(Lo que se va a renderizar)
// Así se hacía antes de React 18:
// ReactDOM.render(<PrimeraApp />, divRoot)
