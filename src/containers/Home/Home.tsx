import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeImage from '../../assets/Home.png';
import HomeCard from '../../components/Cards/HomeCard';

const background = {
    width: "98.8vw",
    height: "250vw",
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: 'cover',
}

export interface IHomeProps { }

export default function Home(props: IHomeProps) {
    const { t, i18n } = useTranslation();

    const CardList = [
        {
            id: 'meeting',
            title: t('home.cards.meeting.title'),
            text: t('home.cards.meeting.text'),
            image: '/assets/MeetingLogo.svg'
        },
        {
            id: 'search',
            title: t('home.cards.search.title'),
            text: t('home.cards.search.text'),
            image: '/assets/SearchLogo.svg'
        },
        {
            id: 'interviews',
            title: t('home.cards.interviews.title'),
            text: t('home.cards.interviews.text'),
            image: '/assets/InterviewsLogo.svg'
        },
        {
            id: 'hiring',
            title: t('home.cards.hiring.title'),
            text: t('home.cards.hiring.text'),
            image: '/assets/HiringLogo.svg'
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
                                HOW TO CHOOSE THE RIGHT SERVICE FOR YOUR BUSINESS?
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 20, md: 15 }} fontWeight={400} lineHeight={1.2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Grid>
                        <Grid item xs={6.5} />
                        <Grid item xs={0.5} />
                        <Grid item container xs={7} mt={5}>
                            <Button variant='outlined'>
                                CALL TO ACTION
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box display="flex" mt={20}>
                    <Grid container mt={35}>
                        <Grid item xs={0.5} />
                        <Grid item container xs={6}>
                            <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 60, md: 50 }} fontWeight={400} lineHeight={1.5}>
                                ABOUT OUR SELECTION PROCESS
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, md: 20 }} fontWeight={400} lineHeight={1.2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Grid>
                        <Grid item xs={5.5} />
                    </Grid>
                </Box>
                <Box display="flex" mt={10}>
                    <Grid container mt={15}>
                        <Grid item xs />
                        <Grid item container xs={8} justifyContent='center'>
                            <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 60, md: 50 }} fontWeight={400} lineHeight={1.5} sx={{ textAlign: 'center' }} >
                                ARE YOU READY TO START LOOKING FOR YOUR NEW IT RESOURCE?
                            </Typography>
                            <Button variant='outlined' sx={{ marginTop: '70px' }}>
                                CALL TO ACTION
                            </Button>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                </Box>
            </div>
        </Box>
    );
}
