import axios from 'axios'

export const getApiResource = (url) => {
  const res = axios.get(url).then((res) => {
    if (!res.status === 200) {
      console.log('Не удалось получить данные', res.status)
      return false
    }
    return res.data
  })
  return res
}
