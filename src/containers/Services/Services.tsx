import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../../components/Cards/ServiceCard';
import { useImageMultiplier } from '../../store/Main';
import { Box, Grid, Typography } from '@mui/material';
import ServiceHero from '../../assets/servicios-dream-do-it.png';
import MobileImage from '../../assets/ServiciosMobile.png';
import ServiceCardMobile from '../../components/Cards/ServiceCardMobile';

const imageHero = {
    width: "auto",
    height: "50vw",
    backgroundImage: `url(${ServiceHero})`,
    backgroundSize: 'cover',
}

const imageMobile = {
    width: "auto",
    height: "50vw",
    backgroundImage: `url(${MobileImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

export interface IServicesProps { }

export default function Services(props: IServicesProps) {
    const { imageSizeMultiplier, screenSize } = useImageMultiplier();
    const { t } = useTranslation();

    const CardList = [
        {
            id: 'implementation',
            title: t('services.cards.implementation.title'),
            text: [t('services.cards.implementation.text_1'), t('services.cards.implementation.text_2'), t('services.cards.implementation.text_3'),],
            image: '/assets/automatizacion-infraestructura-cloud.png',
            reverse: false
        },
        {
            id: 'advice',
            title: t('services.cards.advice.title'),
            text: [t('services.cards.advice.text_1'), t('services.cards.advice.text_2'), t('services.cards.advice.text_3'),],
            image: '/assets/asesoramiento-ciberseguridad.png',
            reverse: true
        },
        {
            id: 'outsourcing',
            title: t('services.cards.outsourcing.title'),
            text: [t('services.cards.outsourcing.text_1'), t('services.cards.outsourcing.text_2'), t('services.cards.outsourcing.text_3'),],
            image: '/assets/outsourcing.png',
            reverse: false
        },
        {
            id: 'recruitment',
            title: t('services.cards.recruitment.title'),
            text: [t('services.cards.recruitment.text_1'), t('services.cards.recruitment.text_2'), t('services.cards.recruitment.text_3'),],
            image: '/assets/recruitment.png',
            reverse: true
        },

    ]

    return (
        <Box mb={60}>
            {(screenSize === 'xs' || screenSize === 'sm') ?
                <Box>
                    <Box style={imageMobile} mt={10} />
                    <Grid container mt={{ sm: 5, xs: 3 }}>
                        <Grid item container xs={12} mx={5}>
                            <Typography fontFamily='IntegralCF' color='white' fontSize={{ sm: 25, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                {t('services.main.services_title')}
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} mx={5}>
                            <Typography fontFamily='Nunito Sans' color='#22B573' mt={{ sm: 2, xs: 1 }} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                {t('services.main.services_text_1')}
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} mx={5}>
                            <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                {t('services.main.services_text_2')}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box display='flex' justifyItems='center' flexDirection='column'>
                        {CardList.map((card) => (<ServiceCardMobile key={card.id} title={card.title} text={card.text} image={card.image} reverse={card.reverse} />))}
                    </Box>
                </Box>
                :
                <Box>
                    <Box style={imageHero}>
                        <Box display="flex" mt={10}>
                            <Grid container mt={{ xl: 8, lg: 8, md: 6, sm: 5, xs: 3 }}>
                                <Grid item xs={0.5} />
                                <Grid item container xs={5}>
                                    <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 70, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                        {t('services.main.services_title')}
                                    </Typography>
                                    <Typography fontFamily='Nunito Sans' color='#22B573' mt={{ xl: 5, lg: 4, md: 3, sm: 2, xs: 1 }} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                        {t('services.main.services_text_1')}
                                    </Typography>
                                    <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                        {t('services.main.services_text_2')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box >
                        {CardList.map((card) => (<ServiceCard key={card.id} title={card.title} text={card.text} image={card.image} reverse={card.reverse} />))}
                    </Box>
                </Box>
            }
        </Box>
    );
}