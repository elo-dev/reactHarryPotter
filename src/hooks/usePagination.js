import { useState } from 'react'

const usePagination = ({ people }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [peoplePerPage] = useState(16)

  const lastPeopleIndex = currentPage * peoplePerPage
  const firstPeopleIndex = lastPeopleIndex - peoplePerPage
  const currentPeople = people.slice(firstPeopleIndex, lastPeopleIndex)

  const handlePagination = (e, pageNumber) => {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }

  return {
    currentPeople,
    handlePagination,
    peoplePerPage,
  }
}

export default usePagination
