import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useSelected } from '../../context/SelectProvider'
import { NavLink } from 'react-router-dom'

export default function SelectSchool() {
  
  const isSelect = useSelected()

  const handleChange = (event) => {
    isSelect.select(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120, border: 'transparent' }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            top: -11,
            color: 'var(--theme-default-header)',
            fontFamily: 'var(--font-text)',
          }}
        >
          Школа
        </InputLabel>
        <NavLink to='/school'>
            <Select
            sx={{
                height: 30,
                color: 'var(--theme-default-header)',
                border: 'transparent',
                fontFamily: 'var(--font-text)',
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isSelect.school}
            label="School"
            onChange={handleChange}
            >
            <MenuItem value={'gryffindor'}>Гриффиндор</MenuItem>
            <MenuItem value={'hufflepuff'}>Пуффендуй</MenuItem>
            <MenuItem value={'ravenclaw'}>Когтевран</MenuItem>
            <MenuItem value={'slytherin'}>Слизерин</MenuItem>
            </Select>
        </NavLink>
      </FormControl>
    </Box>
  )
}
