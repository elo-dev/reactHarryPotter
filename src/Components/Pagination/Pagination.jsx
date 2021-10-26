import React from 'react'
import { Link } from 'react-router-dom'
import style from './Pagination.module.scss'

export const PaginationPage = ({
  handlePagination,
  peoplePerPage,
  totalPeople
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className={style.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={style.pagination__item}>
              <Link to='' onClick={(e) => handlePagination(e, number)}>
                  {number}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
