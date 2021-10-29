import { Breadcrumbs } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'
import MUISwitch from './SwitchTheme/SwitchTheme'
import { useTheme, THEME_LIGHT, THEME_DARK } from '../../context/ThemeProvider'
import { storage } from '../../services/localStorage'
import SelectSchool from '../Select/Select'
import AccountMenu from './MobileMenu/MobileMenu'

export const Header = () => {
  const isTheme = useTheme()

  const [checkedTheme, setCheckedTheme] = useState(storage.getItem('checkedTheme') || false)

  storage.setItem('checkedTheme', checkedTheme)

  const changeTheme = () => {
    if(isTheme.theme === THEME_LIGHT){
      isTheme.change(THEME_DARK)
      setCheckedTheme(true)
    }else if(isTheme.theme === THEME_DARK){
      isTheme.change(THEME_LIGHT)
      setCheckedTheme(false)
    }
  }

  return (
    <div className={style.header}>
      <div className={style.mobileMenu}>
        <AccountMenu />
      </div>
      <Breadcrumbs aria-label="breadcrumb" className={style.header__nav}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/students">Студенты</NavLink>
        <SelectSchool />
      </Breadcrumbs>
      <MUISwitch
        checked={checkedTheme}
        onChange={changeTheme}
      />
    </div>
  )
}
