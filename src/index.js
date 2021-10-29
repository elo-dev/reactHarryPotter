import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import ThemeProvider from './context/ThemeProvider'
import SelectProvider from './context/SelectProvider'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SelectProvider>
        <App />
      </SelectProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
