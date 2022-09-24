import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../../components/Cards/ServiceCard';
import { useImageMultiplier } from '../../store/Main';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import ServiceHero from '../../assets/services-hero.png';
import { styled } from '@mui/material/styles';
import { indigo, deepPurple, purple } from '@mui/material/colors';

const background = {
    width: "auto",
    height: "50vw",
    backgroundImage: `url(${ServiceHero})`,
    backgroundSize: 'cover',
}

type GradientBoxProps = {
    colors?: string[];
};
const GradientBox = styled(Box)<GradientBoxProps>(({ colors }) => ({
    color: 'white',
    ...(colors && {
        background: `linear-gradient(135.44deg, #0A1128 0%, #22B573 247.42%)`,
    }),
}));

export interface IServicesProps { }

export default function Services(props: IServicesProps) {
    const { imageSizeMultiplier } = useImageMultiplier();
    const { t } = useTranslation();

    useEffect(() => {
        console.log(imageSizeMultiplier)
    })

    const CardList = [
        {
            id: 'implementation',
            title: t('services.cards.implementation.title'),
            text_1: t('services.cards.implementation.text_1'),
            text_2: t('services.cards.implementation.text_2'),
            text_3: t('services.cards.implementation.text_3'),
            image: '/assets/automatizacion-infraestructura-cloud.png'
        },
        {
            id: 'advice',
            title: t('services.cards.advice.title'),
            text_1: t('services.cards.advice.text_1'),
            text_2: t('services.cards.advice.text_2'),
            text_3: t('services.cards.advice.text_3'),
            image: '/assets/asesoramiento-ciberseguridad.png'
        },
        {
            id: 'outsourcing',
            title: t('services.cards.outsourcing.title'),
            text_1: t('services.cards.outsourcing.text_1'),
            text_2: t('services.cards.outsourcing.text_2'),
            text_3: t('services.cards.outsourcing.text_3'),
            image: '/assets/outsourcing.png'
        },
        {
            id: 'recruitment',
            title: t('services.cards.recruitment.title'),
            text_1: t('services.cards.recruitment.text_1'),
            text_2: t('services.cards.recruitment.text_2'),
            text_3: t('services.cards.recruitment.text_3'),
            image: '/assets/recruitment.png'
        },

    ]

    return (
        <>
            <Box style={background}>
                <Box display="flex" mt={10}>
                    <Grid container mt={15}>
                        <Grid item xs={0.5} />
                        <Grid item container xs={5}>
                            <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 70, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                {t('services.main.services_title')}
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                {t('services.main.services_text_1')}
                            </Typography>
                            <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                {t('services.main.services_text_2')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
            <Box mt={0}>
                {CardList.map((card) => (<ServiceCard key={card.id} title={card.title} text_1={card.text_1} text_2={card.text_2} text_3={card.text_3} image={card.image} />))}
            </Box>

            <GradientBox
                colors={['#0A1128', '#0A1128', '#22B573', '#0A1128', '#0A1128']}
                height='800px'
            >
                <Typography fontFamily='Nunito Sans' color='white' mt={5} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                    {t('services.main.services_text_2')}
                </Typography>

            </GradientBox>

            <Box>


            </Box>




        </>
    );
}
