import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import harry from '../../assets/harry.png'
import harryOnBroom from '../../assets/harryOnBroom.png'
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
        <Link to={'/characters'}>
          <Button variant="outlined" className={style.start}>
            Войти
          </Button>
        </Link>
      </div>
    </div>
  )
}
