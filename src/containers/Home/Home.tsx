import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeImage from '../../assets/HomeTech.png';
import HomeCard from '../../components/Cards/HomeCard';

const background = {
    width: "98.8vw",
    height: "250vw",
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: 'cover',
}

export interface IHomeProps { }

export default function Home(props: IHomeProps) {
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
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center">
            <div style={background}>
                <Box display="flex" mt={10}>
                    <Grid container mt={15}>
                        <Grid item xs={0.5} />
                        <Grid item container xs={5}>
                            <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 50, md: 40 }} fontWeight={400} lineHeight={1.5}>
                                {t('home.main.migration_title')}
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 20, md: 15 }} fontWeight={400} lineHeight={1.2}>
                                {t('home.main.migration_text')}
                            </Typography>
                        </Grid>
                        <Grid item xs={6.5} />
                        <Grid item xs={0.5} />
                        <Grid item container xs={7} mt={5}>
                            <Button variant='outlined'>
                                {t('home.buttons.ask_about_services')}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box display="flex" mt={20}>
                    <Grid container mt={35}>
                        <Grid item xs={0.5} />
                        <Grid item container xs={6}>
                            <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 60, md: 50 }} fontWeight={400} lineHeight={1.5}>
                                {t('home.main.implementation_title')}
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, md: 20 }} fontWeight={400} lineHeight={1.2}>
                                {t('home.main.implementation_text_1')}
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, md: 20 }} fontWeight={400} lineHeight={1.2}>
                                {t('home.main.implementation_text_2')}
                            </Typography>
                        </Grid>
                        <Grid item xs={5.5} />
                    </Grid>
                </Box>
                <Box display="flex" mt={10}>
                    <Grid container mt={20}>
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
                <Box display="flex" mt={10}>
                    <Grid container mt={15}>
                        <Grid item xs={0.5} />
                        <Grid item container xs={6}>
                            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, md: 20 }} fontWeight={400} lineHeight={1.2}>
                                {t('home.main.implementation_text_3')}
                            </Typography>
                        </Grid>
                        <Grid item xs={5.5} />
                    </Grid>
                </Box>
                <Box display="flex" mt={10}>
                    <Grid container mt={15}>
                        <Grid item xs />
                        <Grid item container xs={8} justifyContent='center'>
                            <Button variant='outlined' sx={{ marginTop: '70px' }}>
                                {t('home.buttons.begin')}
                            </Button>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                </Box>
            </div>
        </Box>
    );
}
