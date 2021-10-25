import { Button } from '@mui/material'
import React from 'react'
import harry from '../../assets/harry.png'
import harryOnBroom from '../../assets/harryOnBroom.png'
import dumbledore from '../../assets/dumbledore.png'
import style from './Home.module.scss'

export const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.home__title}>
        <h1>React Harry Potter</h1>
        <span>Draco dormiens nunquam titillandus!</span>
      </div>
      <img src={harry} alt="Harry Potter" className={style.harryImg} />
      <img
        src={harryOnBroom}
        alt="Harry Potter on broom"
        className={style.harryOnBroomImg}
      />
      <div className={style.home__btn}>
        {/* <img src={dumbledore} alt="dumbledore" className={style.dumbledore} /> */}
        <Button variant="outlined" className={style.start}>
          Войти
        </Button>
      </div>
    </div>
  )
}
