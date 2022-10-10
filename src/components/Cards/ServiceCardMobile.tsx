import { Box, Container, ImageList, Paper, Typography, Grid, Button } from '@mui/material'
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react'
import styles from './Logo.module.css';

export interface CardProps {
    title: string
    text: Array<string>
    image: string
    reverse: boolean
}

export default function ServiceCard(props: CardProps) {
    const { title, text, image, reverse } = props
    const { t } = useTranslation();
    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!expand)
    }

    return (
        <>
            <Box display="flex" mx={{ xl: 15, lg: 10, md: 8, sm: 6, xs: 2 }} sx={{ height: (expand ? '1000px' : '700px'), transition: 'height 0.2s' }}>
                <Grid container mt={10} display="flex" flexDirection={reverse ? 'row-reverse' : 'row'}>
                    <Grid item container xs={12} justifyContent='center'>
                        <Box
                            component='img'
                            src={image}
                            borderRadius="20px"
                            width={{ sm: 350, xs: 300 }}
                        />
                    </Grid>
                    <Grid item container xs={12} mx={5} alignContent='flex-start'>
                        <Typography fontFamily='IntegralCF' color='white' mt={{ sm: 3, xs: 3 }} fontSize={{ sm: 25, xs: 25 }} fontWeight={400} lineHeight={1.5}>
                            {title}
                        </Typography>
                        {text.map((textArea, index) => {
                            return (
                                (index < 1 || expand) &&
                                (<Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 15 }} fontWeight={400} lineHeight={1.2}>
                                    {textArea}
                                </Typography>)
                            )
                        })}
                    </Grid>
                    <Grid item container xs={12} justifyContent='center'>
                        <Button
                            variant='text'
                            sx={{ marginTop: '20px', height: '50px', width: '200px', fontSize: '20px' }}
                            onClick={handleClick}
                        >
                            {t('services.buttons.view')}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}