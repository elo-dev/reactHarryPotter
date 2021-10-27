import { useEffect, useState } from 'react'
import { getApiResource } from '../network/api'

const useGetRecource = (url) => {
  const [people, setPeople] = useState({
    people: [],
    error: undefined
  })

  const getResource = async (url) => {
    const res = getApiResource(url)

    res.then((response) => {
        const data = response.map(
          ({ name, actor, gender, house, image, wizard, hairColour }) => {
            return {
              name,
              actor,
              gender,
              house,
              image,
              wizard,
              hairColour,
            }
          }
        )
        setPeople({ people: data })
      })
      .catch((error) => {
        setPeople({ error })
      })
  }

  useEffect(() => {
    if (url) {
      getResource(url)
    }
  }, [url])

  return { ...people }
}

export default useGetRecource
