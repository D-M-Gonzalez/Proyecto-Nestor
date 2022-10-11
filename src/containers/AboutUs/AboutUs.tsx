import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useImageMultiplier } from '../../store/Main';
import { Box, Grid, Typography } from '@mui/material';
import AboutUsHero from '../../assets/Nosotros.png';
import HomeCard from '../../components/Cards/HomeCard';
import MobileImage from '../../assets/NosotrosMobile.png';

const imageHero = {
    width: "98.8vw",
    height: "180vw",
    minHeight: '1800px',
    backgroundImage: `url(${AboutUsHero})`,
    backgroundSize: 'cover',
}

const imageMobile = {
    width: "auto",
    height: "50vw",
    backgroundImage: `url(${MobileImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

export interface IAboutUsProps { }

export default function AboutUs(props: IAboutUsProps) {
    const { imageSizeMultiplier, screenSize } = useImageMultiplier();
    const { t } = useTranslation();

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
        <Box mb={{ md: 0, sm: 50, xs: 50 }}>
            {(screenSize === 'xs' || screenSize === 'sm') ?
                <Box>
                    <Box style={imageMobile} mt={10} />
                    <Box display="flex" mt={2}>
                        <Grid container mt={{ sm: 2, xs: 1 }}>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='IntegralCF' color='white' fontSize={{ sm: 25, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                    {t('about_us.main.about_us_title')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='Nunito Sans' color='#22B573' mt={{ sm: 2, xs: 1 }} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                    {t('about_us.main.about_us_text_1')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                    {t('about_us.main.about_us_text_2')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5} mt={5}>
                                <Typography fontFamily='IntegralCF' color='white' fontSize={{ sm: 25, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                    {t('about_us.main.vision_title')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                    {t('about_us.main.vision_text_1')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                    {t('about_us.main.vision_text_2')}
                                </Typography>
                            </Grid>
                            <Box sx={{
                                width: '100%', height: '500px', overflowX: 'scroll', '&::-webkit-scrollbar': {
                                    width: 0
                                }, msOverflowStyle: 'none', scrollbarWidth: 'none'
                            }}>
                                <Grid container mt={10} sx={{ width: '900px' }}>
                                    <Grid item xs={0.5} />
                                    {CardList.map((card) => {
                                        return (
                                            <Grid item container xs={3.66} key={card.id}>
                                                <HomeCard image={card.image} title={card.title} text={card.text} />
                                            </Grid>
                                        )
                                    })}
                                    <Grid item xs={0.5} />
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                :
                <Box
                    display="flex"
                    mt={-5}
                    flexDirection="column"
                    alignItems="center"
                >
                    <div style={imageHero}>
                        <Box display="flex" mt={10}>
                            <Grid container mt={{ xl: 15, lg: 12, md: 9, sm: 5, xs: 4 }}>
                                <Grid item xs={0.5} />
                                <Grid item container xs={5}>
                                    <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 70, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                        {t('about_us.main.about_us_title')}
                                    </Typography>
                                    <Typography fontFamily='Nunito Sans' color='#22B573' mt={{ xl: 5, md: 3, xs: 1 }} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                        {t('about_us.main.about_us_text_1')}
                                    </Typography>
                                    <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                        {t('about_us.main.about_us_text_2')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display="flex" mt={{ xl: 60, lg: 40, md: 40 }}>
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
                                            <HomeCard image={card.image} title={card.title} text={card.text} />
                                        </Grid>
                                    )
                                })}
                                <Grid item xs />
                            </Grid>
                        </Box>
                    </div>
                </Box>
            }
        </Box>
    );
}
