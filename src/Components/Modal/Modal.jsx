import React from 'react'
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  CardMedia,
  CardContent,
} from '@mui/material'
import noImage from '../../assets/noImage/no-photo.png'
import style from './Modal.module.scss'


export const ModalPerson = ({ open, handleClose, items }) => {
  const box = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={box}>
          <CardMedia
            sx={{ maxWidth: 160, maxHeight: 260 }}
            component="img"
            image={items.image ? items.image : noImage}
            alt={items.name}
          />
          <CardContent sx={{ height: 100 }}>
            <div className={style.modal__info}>
                <h2>{items.name}</h2>
                <p>Школа: {items.house ? items.house : 'Отсутствует'}</p>
                <p>Волшебник: {items.wizard ? 'Да' : 'Нет'}</p>
                <p>Актер: {items.actor ? items.actor : 'Отсутствует'}</p>
                <p>Пол: {items.gender}</p>
                <p>Цвет волос: {items.hairColour}</p>
            </div>
          </CardContent>
        </Box>
      </Fade>
    </Modal>
  )
}
