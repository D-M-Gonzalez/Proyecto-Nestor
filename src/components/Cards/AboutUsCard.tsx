import { Box, Container, ImageList, Paper, Typography } from '@mui/material'
import React from 'react'
import styles from './Logo.module.css';

export interface CardProps {
  title: string
  text: string
  image: string
}

export default function AboutUsCard(props: CardProps) {
  const { title, text, image } = props

  return (
    <Paper elevation={10} sx={{ width: '300px', height: '365px', backgroundColor: 'rgb(255,255,255,0.15)', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
      <Box
        display='flex'
        flexDirection='column'
        alignItems="center"
      >
        <Box mt={5}>
          <img className={styles.logo} src={image} />
        </Box>
        <Box mt={3} sx={{ width: '70%' }}>
          <Typography fontFamily='Nunito Sans' fontSize={20} color='white'>{title}</Typography>
          <Typography fontFamily='Nunito Sans' fontSize={15} color='white'>{text}</Typography>
        </Box>
      </Box>
    </Paper>
  )
}