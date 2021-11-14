import React, { useState } from 'react'
import { API_CHARACTERS } from '../../constants/constants'
import style from './Characters.module.scss'
import { CharactersList } from './CharactersList/CharactersList'
import { Loading } from '../Loading/Loading'
import { PaginationPage } from '../Pagination/Pagination'
import usePagination from '../../hooks/usePagination'
import useGetRecource from '../../hooks/useGetResource'
import SearchField from '../SearchField/SearchField'

const Characters = () => {
  const { people } = useGetRecource(API_CHARACTERS)
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

  return (
    <div className={style.characters}>
      <h1>Персонажи</h1>
      <div className={style.characters__search}>
        <SearchField
          setValueInput={setValueInput}
          valueInput={valueInput}
          totalPeople={filterPeople}
        />
      </div>
      {people.length !== 0 ? (
        <>
          <CharactersList characters={currentPeople} />
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

export default Characters
