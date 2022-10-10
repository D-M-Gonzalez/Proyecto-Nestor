import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';
import HomeImage from '../../assets/HomeTech.png';
import MobileImage from '../../assets/Home.png';
import HomeCard from '../../components/Cards/HomeCard';
import { useImageMultiplier } from '../../store/Main';

const background = {
    width: "98.8vw",
    height: "250vw",
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: 'cover',
}

const imageMobile = {
    width: "auto",
    height: "50vw",
    backgroundImage: `url(${MobileImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

export interface IHomeProps { }

export default function Home(props: IHomeProps) {
    const { imageSizeMultiplier, screenSize } = useImageMultiplier();
    const { t } = useTranslation();

    const CardList = [
        {
            id: 'survey',
            title: t('home.cards.survey.title'),
            text: t('home.cards.survey.text'),
            image: '/assets/NotesLogo.svg'
        },
        {
            id: 'strategy',
            title: t('home.cards.strategy.title'),
            text: t('home.cards.strategy.text'),
            image: '/assets/ArcheryLogo.svg'
        },
        {
            id: 'implementation',
            title: t('home.cards.implementation.title'),
            text: t('home.cards.implementation.text'),
            image: '/assets/CloudLogo.svg'
        },
        {
            id: 'training',
            title: t('home.cards.training.title'),
            text: t('home.cards.training.text'),
            image: '/assets/SignLogo.svg'
        },
    ]



    return (
        <Box mb={{ md: 50, sm: 50, xs: 50 }}>
            {(screenSize === 'xs' || screenSize === 'sm') ?
                <Box>
                    <Box>
                        <Box style={imageMobile} mt={10} />
                        <Box display="flex" mt={2}>
                            <Grid container mt={{ sm: 2, xs: 1 }}>
                                <Grid item container xs={12} mx={5}>
                                    <Typography fontFamily='IntegralCF' color='white' fontSize={{ sm: 25, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                        {t('home.main.migration_title')}
                                    </Typography>
                                </Grid>
                                <Grid item container xs={12} mx={5}>
                                    <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                        {t('home.main.migration_text')}
                                    </Typography>
                                </Grid>
                                <Grid item container xs={12} mt={{ xl: 5, md: 4, sm: 5, xs: 5 }} justifyContent='center'>
                                    <Button variant='text' sx={{ marginTop: '20px', height: '50px', width: '250px', fontSize: '20px' }}>
                                        {t('home.buttons.ask_about_services')}
                                    </Button>
                                </Grid>
                                <Grid item container xs={12} mx={5} mt={5}>
                                    <Typography fontFamily='IntegralCF' color='white' fontSize={{ sm: 25, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                        {t('home.main.implementation_title')}
                                    </Typography>
                                </Grid>
                                <Grid item container xs={12} mx={5}>
                                    <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                        {t('home.main.implementation_text_1')}
                                    </Typography>
                                </Grid>
                                <Box sx={{
                                    width: '100%', height: '500px', overflowX: 'scroll', '&::-webkit-scrollbar': {
                                        width: 0
                                    }, msOverflowStyle: 'none', scrollbarWidth: 'none'
                                }}>
                                    <Grid container mt={10} sx={{ width: '1200px' }}>
                                        <Grid item xs={0.5} />
                                        {CardList.map((card) => {
                                            return (
                                                <Grid item container xs={2.75} key={card.id}>
                                                    <HomeCard image={card.image} title={card.title} text={card.text} />
                                                </Grid>
                                            )
                                        })}
                                        <Grid item xs={0.5} />
                                    </Grid>
                                </Box>
                                <Grid item container xs={12} mx={5}>
                                    <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                        {t('home.main.implementation_text_3')}
                                    </Typography>
                                </Grid>
                                <Grid item container xs={12} justifyContent='center' mt={5}>
                                    <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 65, lg: 40, md: 25, sm: 16, xs: 16 }} fontWeight={400} lineHeight={1.5}>
                                        {t('home.main.ready_title')}
                                    </Typography>
                                </Grid>
                                <Grid item container xs={12} mt={{ xl: 5, md: 4, sm: 5, xs: 5 }} justifyContent='center'>
                                    <Button variant='text' sx={{ marginTop: '20px', height: '50px', width: '180px', fontSize: '20px' }}>
                                        {t('home.buttons.begin')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                :
                <Box>
                    <Box
                        display="flex"
                        mt={-5}
                        flexDirection="column"
                        alignItems="center">
                        <div style={background}>
                            <Box display="flex" mt={10}>
                                <Grid container mt={10}>
                                    <Grid item xs={0.5} />
                                    <Grid item container xs={5}>
                                        <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 65, lg: 40, md: 25, sm: 16, xs: 11 }} fontWeight={400} lineHeight={1.5}>
                                            {t('home.main.migration_title')}
                                        </Typography>
                                        <Typography fontFamily='Nunito Sans' color='white' mt={{ xl: 5, md: 4, sm: 2 }} fontSize={{ xl: 25, lg: 18, md: 14, sm: 8, xs: 5 }} fontWeight={400} lineHeight={1.2}>
                                            {t('home.main.migration_text')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6.5} />
                                    <Grid item xs={0.5} />
                                    <Grid item container xs={7} mt={{ xl: 5, md: 4, sm: 2 }}>
                                        <Button variant='outlined' sx={{ height: '3vw', width: '22vw', fontSize: '1.1vw' }}>
                                            {t('home.buttons.ask_about_services')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box display="flex" mt={{ xl: 20, lg: 15, md: 10, sm: 5, xs: 1 }}>
                                <Grid container mt={{ xl: 35, lg: 25, md: 20, sm: 15, xs: 10 }}>
                                    <Grid item xs={0.5} />
                                    <Grid item container xs={6}>
                                        <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 65, lg: 40, md: 25, sm: 16, xs: 11 }} fontWeight={400} lineHeight={1.5}>
                                            {t('home.main.implementation_title')}
                                        </Typography>
                                        <Typography fontFamily='Nunito Sans' color='white' mt={{ xl: 5, md: 4, sm: 2 }} fontSize={{ xl: 25, lg: 18, md: 14, sm: 8, xs: 5 }} fontWeight={400} lineHeight={1.2}>
                                            {t('home.main.implementation_text_1')}
                                        </Typography>
                                        <Typography fontFamily='Nunito Sans' color='white' mt={{ xl: 5, md: 4, sm: 2 }} fontSize={{ xl: 25, lg: 18, md: 14, sm: 8, xs: 5 }} fontWeight={400} lineHeight={1.2}>
                                            {t('home.main.implementation_text_2')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5.5} />
                                </Grid>
                            </Box>
                            <Box display="flex" mt={{ xl: 10, lg: 8, md: 6, sm: 4, xs: 2 }}>
                                <Grid container mt={{ xl: 20, lg: 16, md: 12, sm: 8, xs: 4 }}>
                                    <Grid item xs />
                                    {CardList.map((card) => {
                                        return (
                                            <Grid item container xs={2.8} key={card.id}>
                                                <HomeCard image={card.image} title={card.title} text={card.text} />
                                            </Grid>
                                        )
                                    })}
                                    <Grid item xs />
                                </Grid>
                            </Box>
                            <Box display="flex" mt={{ xl: 10, lg: 8, md: 6, sm: 4, xs: 2 }}>
                                <Grid container mt={{ xl: 20, lg: 16, md: 12, sm: 8, xs: 4 }}>
                                    <Grid item xs={0.5} />
                                    <Grid item container xs={6}>
                                        <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                            {t('home.main.implementation_text_3')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5.5} />
                                </Grid>
                            </Box>
                            <Box display="flex" mt={{ xl: 10, lg: 8, md: 6, sm: 4, xs: 2 }}>
                                <Grid container mt={{ xl: 20, lg: 16, md: 12, sm: 8, xs: 4 }}>
                                    <Grid item xs={2} />
                                    <Grid item container xs={8} justifyContent='center'>
                                        <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 65, lg: 40, md: 25, sm: 16, xs: 11 }} fontWeight={400} lineHeight={1.5}>
                                            {t('home.main.ready_title')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} />
                                    <Grid item xs={2} />
                                    <Grid item container xs={8} justifyContent='center'>
                                        <Button variant='outlined' sx={{ marginTop: '70px', height: '4vw', width: '18vw', fontSize: '1.2vw' }}>
                                            {t('home.buttons.begin')}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={2} />
                                </Grid>
                            </Box>
                        </div>
                    </Box>
                </Box>
            }
        </Box>
    );
}
