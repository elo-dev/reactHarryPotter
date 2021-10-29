import React from 'react'
import useGetRecource from '../../hooks/useGetResource'
import { PersonCard } from '../PersonCard/PersonCard'
import style from './School.module.scss'
import { API_SCHOOL } from '../../constants/constants'
import { useSelected } from '../../context/SelectProvider'

export const School = () => {
  
  const isSelect = useSelected()

  const { people } = useGetRecource(API_SCHOOL + isSelect.school)

  return (
    <div className={style.school__container}>
      <h1 className={style.school__title}>{isSelect.school}</h1>
      <ul className={style.list__container}>
        {people.map(({ ...items }, index) => (
          <PersonCard key={index} items={items} />
        ))}
      </ul>
    </div>
  )
}
