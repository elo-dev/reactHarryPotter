import React, { useEffect, useState } from 'react'
import { getApiResource } from '../../network/api'
import { API_CHARACTERS } from '../../constants/constants'
import style from './Characters.module.scss'
import { CharactersList } from './CharactersList/CharactersList'
import { Loading } from '../Loading/Loading'

export const Characters = () => {
  const [characters, setCharacters] = useState(null)

  const getResource = async (url) => {
    const res = getApiResource(url)

    res.then((response) => {
      const characters = response.map(
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
      setCharacters(characters)
    })
  }

  useEffect(() => {
    getResource(API_CHARACTERS)
  }, [])

  return (
    <div className={style.characters}>
    <h1>Персонажи</h1>
      {characters ? (
        <CharactersList characters={characters} />
      ) : (
        <Loading />
      )}
    </div>
  )
}
