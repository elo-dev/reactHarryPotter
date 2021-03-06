import React from 'react'
import { PersonCard } from '../../PersonCard/PersonCard'
import style from './CharactersList.module.scss'

export const CharactersList = ({ characters }) => {
  return (
    <ul className={style.list__container}>
      {characters.map(({...items}, index) => (
        <PersonCard key={index} items={items} />
      ))}
    </ul>
  )
}
