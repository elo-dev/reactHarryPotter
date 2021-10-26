import React, { useEffect } from 'react'
import { API_CHARACTERS_STUDENTS } from '../../constants/constants'
import { StudentsList } from './StudentsList/StudentsList'
import { Loading } from '../Loading/Loading'
import { getApiResource } from '../../network/api'
import style from './Students.module.scss'
import backIcon from '../../assets/back/back.svg'
import { Link, useHistory } from 'react-router-dom'
import { PaginationPage } from '../Pagination/Pagination'
import { withPagination } from '../../hoc-helper/withPagination'

const Students = ({
  people,
  setPeople,
  currentPeople,
  peoplePerPage,
  handlePagination,
}) => {
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
            hairColour,
          }
        }
      )
      setPeople(students)
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
      <Link to="" onClick={handleGoBack} className={style.back}>
        <img src={backIcon} alt="back" className={style.backIcon} />
        <p>Назад</p>
      </Link>

      {people ? (
        <>
          <StudentsList students={currentPeople} />
          <PaginationPage
            peoplePerPage={peoplePerPage}
            totalPeople={people.length}
            handlePagination={handlePagination}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default withPagination(Students)
