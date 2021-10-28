import { useState } from 'react'

const usePagination = ({ filterPeople }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [peoplePerPage] = useState(16)

  const lastPeopleIndex = currentPage * peoplePerPage
  const firstPeopleIndex = lastPeopleIndex - peoplePerPage
  const currentPeople = filterPeople.slice(firstPeopleIndex, lastPeopleIndex)

  const handlePagination = (e, pageNumber) => {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }

  return {
    currentPeople,
    handlePagination,
    peoplePerPage,
    setCurrentPage
  }
}

export default usePagination
