import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useImageMultiplier } from '../../store/Main';
import { Box, Grid, Typography } from '@mui/material';
import ServiceHero from '../../assets/services-hero.png';
import AboutUsCard from '../../components/Cards/AboutUsCard';

const imageHero = {
    width: "auto",
    height: "50vw",
    backgroundImage: `url(${ServiceHero})`,
    backgroundSize: 'cover',
}

export interface IAboutUsProps { }

export default function AboutUs(props: IAboutUsProps) {
    const { imageSizeMultiplier } = useImageMultiplier();
    const { t } = useTranslation();

    useEffect(() => {
        console.log(imageSizeMultiplier)
    })

    const CardList = [
        {
            id: 'vision',
            title: t('about_us.cards.vision.title'),
            text: t('about_us.cards.vision.text'),
            image: '/assets/NotesLogo.svg'
        },
        {
            id: 'mision',
            title: t('about_us.cards.mision.title'),
            text: t('about_us.cards.mision.text'),
            image: '/assets/ArcheryLogo.svg'
        },
        {
            id: 'value',
            title: t('about_us.cards.values.title'),
            text: t('about_us.cards.values.text'),
            image: '/assets/CloudLogo.svg'
        },
    ]

    return (
        <>
            <Box style={imageHero}>
                <Box display="flex" mt={10}>
                    <Grid container mt={15}>
                        <Grid item xs={0.5} />
                        <Grid item container xs={5}>
                            <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 70, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                {t('about_us.main.about_us_title')}
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='#22B573' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                {t('about_us.main.about_us_text_1')}
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                {t('about_us.main.about_us_text_2')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box display="flex">
                <Grid container>
                    <Grid item xs={0.5} />
                    <Grid item container xs={6}>
                        <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 70, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                            {t('about_us.main.vision_title')}
                        </Typography>
                        <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                            {t('about_us.main.vision_text_1')}
                        </Typography>
                        <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                            {t('about_us.main.vision_text_2')}
                        </Typography>
                    </Grid>
                    <Grid item xs={5.5} />
                </Grid>
            </Box>

            <Box display="flex" mt={10} mb={60}>
                <Grid container mt={20}>
                    <Grid item xs />
                    {CardList.map((card) => {
                        return (
                            <Grid item container xs={2.8} key={card.id}>
                                <AboutUsCard image={card.image} title={card.title} text={card.text} />
                            </Grid>
                        )
                    })}
                    <Grid item xs />
                </Grid>
            </Box>

        </>


    );
}
