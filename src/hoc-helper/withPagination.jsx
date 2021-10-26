import React, { useState } from 'react'

export const withPagination = (View) => {
  return (props) => {
    const [people, setPeople] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [peoplePerPage] = useState(16)

    const lastPeopleIndex = currentPage * peoplePerPage
    const firstPeopleIndex = lastPeopleIndex - peoplePerPage
    const currentPeople = people.slice(
      firstPeopleIndex,
      lastPeopleIndex
    )

    const handlePagination = (e, pageNumber) => {
      e.preventDefault()
      setCurrentPage(pageNumber)
    }

    return (
      <>
        <View
          people={people}
          setPeople={setPeople}
          currentPeople={currentPeople}
          handlePagination={handlePagination}
          peoplePerPage={peoplePerPage}
          {...props}
        />
      </>
    )
  }
}
