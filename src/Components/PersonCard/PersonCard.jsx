import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import noImage from '../../assets/noImage/no-photo.png'
import style from './PersonCard.module.scss'
import { ModalPerson } from '../Modal/Modal'

export const PersonCard = ({ items }) => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <li className={style.list__item}>
      <Card sx={{ maxWidth: 120, maxHeight: 270 }} onClick={handleOpen} className={style.list__card}>
        <CardMedia
          className={style.list__image}
          component="img"
          image={items.image ? items.image : noImage}
          alt={items.name}
        />
        <CardContent sx={{ height: 100 }}>
          <Typography>{items.name}</Typography>
        </CardContent>
      </Card>
      <ModalPerson open={open} handleClose={handleClose} items={items} />
    </li>
  )
}
