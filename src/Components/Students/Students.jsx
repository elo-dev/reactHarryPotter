import React, { useState } from 'react'
import { API_CHARACTERS_STUDENTS } from '../../constants/constants'
import { StudentsList } from './StudentsList/StudentsList'
import { Loading } from '../Loading/Loading'
import style from './Students.module.scss'
import backIcon from '../../assets/back/back.svg'
import { Link, useHistory } from 'react-router-dom'
import { PaginationPage } from '../Pagination/Pagination'
import usePagination from '../../hooks/usePagination'
import useGetRecource from '../../hooks/useGetResource'
import SearchField from '../SearchField/SearchField'

const Students = () => {
  const { people } = useGetRecource(API_CHARACTERS_STUDENTS)
  const [valueInput, setValueInput] = useState('')

  const filterPeople = people.filter((person) => {
    return person.name.toLowerCase().includes(valueInput.toLowerCase())
  })

  const {
    currentPeople,
    handlePagination,
    peoplePerPage,
    handleNextBtn,
    handlePrevBtn,
    minPageNumberLimit,
    maxPageNumberLimit,
    currentPage,
  } = usePagination({ filterPeople })

  const history = useHistory()

  const handleGoBack = (e) => {
    e.preventDefault()
    history.goBack()
  }

  return (
    <div className={style.students}>
      <h1>Студенты</h1>
      <div className={style.students__option}>
        <Link to="" onClick={handleGoBack} className={style.back}>
          <img src={backIcon} alt="back" className={style.backIcon} />
          <p>Назад</p>
        </Link>

        <SearchField
          className={style.search}
          setValueInput={setValueInput}
          valueInput={valueInput}
          totalPeople={filterPeople}
        />
      </div>

      {people.length !== 0 ? (
        <>
          <StudentsList students={currentPeople} />
          <PaginationPage
            peoplePerPage={peoplePerPage}
            totalPeople={filterPeople.length}
            handlePagination={handlePagination}
            handleNextBtn={handleNextBtn}
            handlePrevBtn={handlePrevBtn}
            minPageNumberLimit={minPageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            currentPage={currentPage}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Students
