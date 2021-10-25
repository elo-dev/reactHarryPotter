import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'
import style from './Header.module.scss'
import MUISwitch from './SwitchTheme/SwitchTheme'

export const Header = () => {
    return (
        <div className={style.header}>
            <Breadcrumbs aria-label="breadcrumb" className={style.header__nav}>
                <Link>Главная</Link>
                <Link>Герои</Link>
            </Breadcrumbs>
            <MUISwitch defaultChecked />
        </div>
    )
}
