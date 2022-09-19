import { Box, Container, Grid, IconButton, SvgIcon, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import FBIcon from '../Icons/FBIcon';
import LNIcon from '../Icons/LNIcon';
import TWIcon from '../Icons/TWIcon';
import IMIcon from '../Icons/IMIcon';
import { HOME, SERVICES, CONTACT, ABOUT_US, FACEBOOK, LINKEDIN, INSTAGRAM, TWITTER } from '../../constants/routePaths';

export interface FooterProps {
    handleClick: (link: string, external?: boolean) => void
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
    },
    socialMediaButtonsStyle: {
        transition: 'filter 0.25s',
        '&:hover': { filter: 'brightness(150%)' }
    }
}

export default function Footer(FooterProps: FooterProps) {
    const { handleClick } = FooterProps
    const { t, i18n } = useTranslation();

    const MenuList = [
        {
            id: 'menu',
            component: <Typography variant='secondary' sx={styles.mainTextStyle}>{t('footer.menu')}</Typography>,
        },
        {
            id: 'home',
            component: <Typography onClick={() => handleClick(HOME)} variant='main' sx={styles.secondaryTextStyle}>{t('menus.home')}</Typography>,
        },
        {
            id: 'services',
            component: <Typography onClick={() => handleClick(SERVICES)} variant='main' sx={styles.secondaryTextStyle}>{t('menus.services')}</Typography>,
        },
        {
            id: 'about_us',
            component: <Typography onClick={() => handleClick(ABOUT_US)} variant='main' sx={styles.secondaryTextStyle}>{t('menus.about_us')}</Typography>,
        },
        {
            id: 'contact',
            component: <Typography onClick={() => handleClick(CONTACT)} variant='main' sx={styles.secondaryTextStyle}>{t('menus.contact')}</Typography>,
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

    const IconList = [
        {
            id: 'FB',
            component: <IconButton onClick={() => handleClick(FACEBOOK, true)} sx={styles.socialMediaButtonsStyle}><FBIcon sx={{ height: '3vw', width: '3vw' }} /></IconButton>
        },
        {
            id: 'LN',
            component: <IconButton onClick={() => handleClick(LINKEDIN, true)} sx={styles.socialMediaButtonsStyle}><LNIcon sx={{ height: '3vw', width: '3vw' }} /></IconButton>
        },
        {
            id: 'IM',
            component: <IconButton onClick={() => handleClick(INSTAGRAM, true)} sx={styles.socialMediaButtonsStyle}><IMIcon sx={{ height: '3vw', width: '3vw' }} /></IconButton>
        },
        {
            id: 'TW',
            component: <IconButton onClick={() => handleClick(TWITTER, true)} sx={styles.socialMediaButtonsStyle}><TWIcon sx={{ height: '3vw', width: '3vw', }} /></IconButton>
        },
    ]


    return (
        <Box position='relative' bottom='200px' sx={{ height: '0px' }}>
            <Box sx={{ marginX: '5vw', backgroundColor: 'rgb(207, 211, 207, 0.5)', height: '2px' }} />
            <Grid container mt={3}>
                <Grid item xs={1} />
                <Grid item container xs={2}>
                    <Box>
                        <Grid container>
                            {MenuList.map((item) => {
                                return (
                                    <Grid item xs={12} key={item.id}>
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
                                    <Grid item xs={12} key={item.id}>
                                        {item.component}
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item container xs={3} />
                <Grid item container xs={2}>
                    {IconList.map((icon) => {
                        return (
                            <Grid item xs={3}>
                                {icon.component}
                            </Grid>
                        )
                    })}
                    <Grid item container xs={1} />
                </Grid>
            </Grid>
        </Box>
    )
}
