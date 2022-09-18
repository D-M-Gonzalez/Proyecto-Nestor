import { Box, Container, Grid, IconButton, SvgIcon, Typography } from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import React from 'react'
import { useTranslation } from 'react-i18next';
import FBIcon from '../Icons/FBIcon';

export interface FooterProps {

}

const styles = {
    mainTextStyle: {
        fontSize: '20px',
        lineHeight: '27px',
    },
    secondaryTextStyle: {
        fontSize: '20px',
        lineHeight: '27px',
        transition: 'color 0.25s',
        '&:hover': { color: '#22B573', cursor: 'pointer' }
    }
}

export default function Footer(FooterProps: FooterProps) {
    const { t, i18n } = useTranslation();

    const MenuList = [
        {
            id: 'menu',
            component: <Typography variant='secondary' sx={styles.mainTextStyle}>{t('footer.menu')}</Typography>,
        },
        {
            id: 'home',
            component: <Typography variant='main' sx={styles.secondaryTextStyle}>{t('menus.home')}</Typography>,
        },
        {
            id: 'services',
            component: <Typography variant='main' sx={styles.secondaryTextStyle}>{t('menus.services')}</Typography>,
        },
        {
            id: 'about_us',
            component: <Typography variant='main' sx={styles.secondaryTextStyle}>{t('menus.about_us')}</Typography>,
        },
        {
            id: 'contact',
            component: <Typography variant='main' sx={styles.secondaryTextStyle}>{t('menus.contact')}</Typography>,
        }
    ]

    const ContactList = [
        {
            id: 'contactList',
            component: <Typography variant='secondary' sx={styles.mainTextStyle}>{t('menus.contact')}</Typography>,
        },
        {
            id: 'phone',
            component: <Typography variant='main'>(+54) 11 3074-8591</Typography>
        },
        {
            id: 'mail',
            component: <Typography variant='main'>contacto@dream-doit.com</Typography>
        },
        {
            id: 'address',
            component: <Typography variant='main'>Villa del Parque, Capital Federal.</Typography>
        },
        {
            id: 'country',
            component: <Typography variant='main'>Argentina</Typography>
        }
    ]


    return (
        <Box pb={5}>
            <Container sx={{ backgroundColor: 'rgb(207, 211, 207, 0.5)', height: '2px' }} />
            <Grid container mt={3}>
                <Grid item xs={1} />
                <Grid item container xs={2}>
                    <Box>
                        <Grid container>
                            {MenuList.map((item) => {
                                return (
                                    <Grid xs={12} key={item.id}>
                                        {item.component}
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item container xs={3}>
                    <Box>
                        <Grid container>
                            {ContactList.map((item) => {
                                return (
                                    <Grid xs={12} key={item.id}>
                                        {item.component}
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item container xs={4}>

                </Grid>
                <Grid item container xs={2}>
                    <Grid item xs={4}>
                        <IconButton>
                            <FBIcon sx={{ width: '150px', height: '50px', viewBox: "10px" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
