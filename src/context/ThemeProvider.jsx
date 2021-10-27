import React, { createContext, useContext, useState } from 'react'
import { changeCssVariables } from '../services/changeCssVariables'
import { storage } from '../services/localStorage'

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'

const ThemeContext = createContext()

export const ThemeProvider = ({ children, ...props }) => {

    const [theme, setTheme] = useState(storage.getItem('theme') || THEME_LIGHT)

    changeCssVariables(theme)

    const change = (theme) => {
        changeCssVariables(theme)
        setTheme(theme)
        storage.setItem('theme', theme)
    }

  return (
    <ThemeContext.Provider value={{ theme, change }} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)