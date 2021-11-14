import React from 'react'
import { Button } from '@mui/material'
import classNames from 'classnames'
import style from './Pagination.module.scss'

export const PaginationPage = ({
  handlePagination,
  peoplePerPage,
  totalPeople,
  handleNextBtn,
  handlePrevBtn,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
    pageNumbers.push(i)
  }

  const renderPageNumber = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          className={classNames(
            style.pagination__item,
            currentPage == number ? style.active : null
          )}
          onClick={(e) => handlePagination(e, number)}
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })

  return (
    <div>
      <ul className={style.pagination}>
        <Button onClick={handlePrevBtn} disabled={currentPage == pageNumbers[0] ? true : false}>Prev</Button>
        {renderPageNumber}
        <Button onClick={handleNextBtn} disabled={currentPage == pageNumbers[pageNumbers.length - 1] ? true : false}>Next</Button>
      </ul>
    </div>
  )
}
