import React from 'react'
import loading from './img/loading.gif'
import style from './Loading.module.scss'

export const Loading = () => {
    return (
        <div className={style.loading}>
            <img src={loading} alt="loading" />
        </div>
    )
}
