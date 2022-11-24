import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterApp from './components/CounterApp'
import reportWebVitals from './reportWebVitals'
import FirstApp from './components/FirstApp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CounterApp />
    {/* <FirstApp title='Hola, soy Kennet'/> */}

  </React.StrictMode>
)
reportWebVitals()