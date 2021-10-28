import * as React from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'
import style from './SearchField.module.scss'

function MyFormHelperText({ totalPeople, valueInput }) {
  const { focused } = useFormControl() || {}

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'Сейчас найдем'
    }

    if(valueInput && totalPeople.length > 0){
        return 'Нашли'
    }
    
    if(valueInput && totalPeople.length === 0){
        return 'Не найдено'
    }

    return 'Имя героя'
  }, [focused])

  return <FormHelperText>{helperText}</FormHelperText>
}

export default function SearchField({ setValueInput, valueInput, totalPeople }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch', height: '8ch' }}>
        <OutlinedInput
          sx={{ color: 'var(--theme-default-header)', border: '1px solid var(--theme-default-header)' }}
          className={style.search}
          placeholder="Please enter text"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <MyFormHelperText totalPeople={totalPeople} valueInput={valueInput} />
      </FormControl>
    </Box>
  )
}
