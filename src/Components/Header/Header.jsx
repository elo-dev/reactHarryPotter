import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'
import MUISwitch from './SwitchTheme/SwitchTheme'

export const Header = () => {
    return (
        <div className={style.header}>
            <Breadcrumbs aria-label="breadcrumb" className={style.header__nav}>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/students'>Студенты</NavLink>
            </Breadcrumbs>
            <MUISwitch defaultChecked />
        </div>
    )
}
