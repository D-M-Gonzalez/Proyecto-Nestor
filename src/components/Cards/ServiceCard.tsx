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
      <Box display="flex" m={10}>
        <Grid container mt={10} display="flex" flexDirection={reverse ? 'row-reverse' : 'row'}>
          <Box mt={5}>
            <Box
              component='img'
              src={image}
              borderRadius="20px"
              width={{ md: 523, xs: 150 }}
            />
          </Box>
          <Grid item xs={0.5} />
          <Grid item container xs={6} alignContent='flex-start'>
            <Typography fontFamily='IntegralCF' color='white' mt={10} fontSize={{ xl: 70, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
              {title}
            </Typography>
            {text.map((textArea) => {
              return (
                <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
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