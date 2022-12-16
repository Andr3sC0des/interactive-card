import React from 'react'
import ReactDOM from 'react-dom/client'
import Interactivecard from './components/Interactivecard'
import "../tailwind.css"
import Attribution from './components/Attribution'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Interactivecard />
    <Attribution />
  </React.StrictMode>
)
