import React from 'react'
import { Container } from '@mui/material'
import './App.scss'
import { Home } from './Components/Home/Home'
import { Header } from './Components/Header/Header'

const App = () => {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  )
}

export default App
