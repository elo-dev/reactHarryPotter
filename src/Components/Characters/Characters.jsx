import React, { useEffect } from 'react'
import { getApiResource } from '../../network/api'
import { API_CHARACTERS } from '../../constants/constants'
import style from './Characters.module.scss'
import { CharactersList } from './CharactersList/CharactersList'
import { Loading } from '../Loading/Loading'
import { PaginationPage } from '../Pagination/Pagination'
import { withPagination } from '../../hoc-helper/withPagination'

const Characters = ({
  people,
  setPeople,
  currentPeople,
  peoplePerPage,
  handlePagination
}) => {
  const getResource = async (url) => {
    const res = getApiResource(url)

    res.then((response) => {
      const charactersList = response.map(
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
      setPeople(charactersList)
    })
  }

  useEffect(() => {
    getResource(API_CHARACTERS)
  }, [])

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

export default withPagination(Characters)
