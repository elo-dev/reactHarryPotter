import React from 'react'
import { Container } from '@mui/material'
import './App.scss'
import { Header } from './Components/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routesConfig } from './routes/routesConfig'

const App = () => {
  return (
    <BrowserRouter>
      <Container className='app__container'>
      <Header />
        <Switch>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
