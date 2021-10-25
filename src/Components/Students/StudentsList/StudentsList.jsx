import React from 'react'
import { PersonCard } from '../../PersonCard/PersonCard'
import style from './StudentsList.module.scss'

export const StudentsList = ({ students }) => {
  return (
    <ul className={style.list__container}>
      {students.map(({ ...items }) => (
        <PersonCard items={items} />
      ))}
    </ul>
  )
}
