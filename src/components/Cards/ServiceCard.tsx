import { Box, Container, ImageList, Paper, Typography, Grid } from '@mui/material'
import React from 'react'
import styles from './Logo.module.css';

export interface CardProps {
  title: string
  text_1: string
  text_2: string
  text_3: string
  image: string
}

export default function ServiceCard(props: CardProps) {
  const { title, text_1, text_2, text_3, image } = props

  return (
    <>
      <Box display="flex" m={10} >
        <Grid container mt={10}>
          <Box mt={5}>
            <Box
              component='img'
              src={image}
              borderRadius="20px"
              width={{ md: 523, xs: 150 }}
            />
          </Box>

          <Grid item xs={0.5} />
          <Grid item container xs={6}>
            <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 70, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
              {title}
            </Typography>
            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
              {text_1}
            </Typography>
            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
              {text_2}
            </Typography>
            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
              {text_3}
            </Typography>
          </Grid>
          <Grid item xs={5.5} />
        </Grid>
      </Box>
    </>

  )
}