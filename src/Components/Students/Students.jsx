import React from 'react'
import { API_CHARACTERS_STUDENTS } from '../../constants/constants'
import { StudentsList } from './StudentsList/StudentsList'
import { Loading } from '../Loading/Loading'
import style from './Students.module.scss'
import backIcon from '../../assets/back/back.svg'
import { Link, useHistory } from 'react-router-dom'
import { PaginationPage } from '../Pagination/Pagination'
import usePagination from '../../hooks/usePagination'
import useGetRecource from '../../hooks/useGetResource'

const Students = () => {

  const { people, error } = useGetRecource(API_CHARACTERS_STUDENTS)
  const { currentPeople, handlePagination, peoplePerPage } = usePagination({people})

  const history = useHistory()

  if(error){
    return null
  }

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

export default Students
