import { Box, Container, ImageList, Paper, Typography, Grid } from '@mui/material'
import React from 'react'
import styles from './Logo.module.css';

export interface CardProps {
  title: string
  text: Array<string>
  image: string
  reverse: boolean
}

export default function ServiceCard(props: CardProps) {
  const { title, text, image, reverse } = props

  return (
    <>
      <Box display="flex" mx={{ xl: 15, lg: 10, md: 8, sm: 6, xs: 2 }}>
        <Grid container mt={10} display="flex" flexDirection={reverse ? 'row-reverse' : 'row'}>
          <Box mt={5}>
            <Box
              component='img'
              src={image}
              borderRadius="20px"
              width={{ xl: 523, lg: 450, md: 320, sm: 220, xs: 350 }}
            />
          </Box>
          <Grid item xs={0.5} />
          <Grid item container xs={12} alignContent='flex-start'>
            <Typography fontFamily='IntegralCF' color='white' mt={{ xl: 5, lg: 6, md: 6, sm: 7, xs: 8 }} fontSize={{ xl: 60, lg: 40, md: 25, sm: 18, xs: 25 }} fontWeight={400} lineHeight={1.5}>
              {title}
            </Typography>
            {text.map((textArea) => {
              return (
                <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ xl: 25, lg: 20, md: 14, sm: 8, xs: 22 }} fontWeight={400} lineHeight={1.2}>
                  {textArea}
                </Typography>
              )
            })}
          </Grid>
          <Grid item xs={5.5} />
        </Grid>
      </Box>
    </>

  )
}