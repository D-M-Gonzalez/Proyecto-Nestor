import { Box, Container, ImageList, Paper, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useImageMultiplier } from '../../store/Main';
import styles from './Logo.module.css';

export interface CardProps {
    title: string
    text: string
    image: string
}

export default function HomeCard(props: CardProps) {
    const { title, text, image } = props
    const { imageSizeMultiplier: ImgX } = useImageMultiplier();

    return (
        <Paper elevation={10} sx={{ width: `${220 * ImgX * ImgX}px`, height: `${300 * ImgX * ImgX}px`, backgroundColor: 'rgb(255,255,255,0.15)', borderRadius: `${20 * ImgX * ImgX}px`, backdropFilter: 'blur(10px)' }}>
            <Box
                display='flex'
                flexDirection='column'
                alignItems="center"
            >
                <Box mt={{ xl: 5, md: 3, sm: 3, xs: 3 }} component='img' src={image} sx={{ width: `${30 * ImgX}%` }} />
                <Box mt={3} sx={{ width: '70%' }}>
                    <Typography fontFamily='Nunito Sans' fontSize={{ xl: 30, lg: 22, md: 16, sm: 22, xs: 22 }} color='white'>{title}</Typography>
                    <Typography fontFamily='Nunito Sans' fontSize={{ xl: 16, lg: 13, md: 10, sm: 13, xs: 13 }} color='white'>{text}</Typography>
                </Box>
            </Box>
        </Paper>
    )
}
