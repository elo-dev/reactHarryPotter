import React from 'react'
import { API_CHARACTERS } from '../../constants/constants'
import style from './Characters.module.scss'
import { CharactersList } from './CharactersList/CharactersList'
import { Loading } from '../Loading/Loading'
import { PaginationPage } from '../Pagination/Pagination'
import usePagination from '../../hooks/usePagination'
import useGetRecource from '../../hooks/useGetResource'

const Characters = () => {

  const { people } = useGetRecource(API_CHARACTERS)
  const { currentPeople, handlePagination, peoplePerPage } = usePagination({people})

  return (
    <div className={style.characters}>
      <h1>Персонажи</h1>
      {people.length !== 0 ? (
        <>
          <CharactersList characters={currentPeople} />
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

export default Characters
