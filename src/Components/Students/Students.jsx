import React, { useEffect, useState } from 'react'
import { API_CHARACTERS_STUDENTS } from '../../constants/constants'
import { StudentsList } from './StudentsList/StudentsList'
import { Loading } from '../Loading/Loading'
import { getApiResource } from '../../network/api'
import style from './Students.module.scss'
import backIcon from '../../assets/back/back.svg'
import { Link, useHistory } from 'react-router-dom'

export const Students = () => {
  const [students, setStudents] = useState(null)

  const getResource = async (url) => {
    const res = getApiResource(url)

    res.then((response) => {
      const students = response.map(
        ({ name, actor, gender, house, image, wizard, hairColour }) => {
          return {
            name,
            actor,
            gender,
            house,
            image,
            wizard,
            hairColour
          }
        }
      )
      setStudents(students)
    })
  }

  useEffect(() => {
    getResource(API_CHARACTERS_STUDENTS)
  }, [])

  const history = useHistory()

  const handleGoBack = (e) => {
    e.preventDefault()
    history.goBack()
  }

  return (
    <div className={style.students}>
    <h1>Студенты</h1>
    <Link to='' onClick={handleGoBack} className={style.back}>
        <img src={backIcon} alt="back" className={style.backIcon} />
        <p>Назад</p>
    </Link>

    {students 
      ? <StudentsList students={students} />
      : <Loading/>
    }
    </div>
  )
}
