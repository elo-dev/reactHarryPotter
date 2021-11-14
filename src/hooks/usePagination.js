import { useState } from 'react'

const usePagination = ({ filterPeople }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [peoplePerPage] = useState(16)
  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const lastPeopleIndex = currentPage * peoplePerPage
  const firstPeopleIndex = lastPeopleIndex - peoplePerPage
  const currentPeople = filterPeople.slice(firstPeopleIndex, lastPeopleIndex)

  const handlePagination = (e, pageNumber) => {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }

  const handleNextBtn = () => {
    setCurrentPage(currentPage+1)
    if(currentPage+1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevBtn = () => {
    setCurrentPage(currentPage-1)
    if((currentPage - 1) % pageNumberLimit == 0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  return {
    currentPeople,
    handlePagination,
    peoplePerPage,
    handleNextBtn,
    handlePrevBtn,
    maxPageNumberLimit,
    minPageNumberLimit,
    currentPage
  }
}

export default usePagination
