import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next';
import FBIcon from '../Icons/FBIcon';
import LNIcon from '../Icons/LNIcon';
import TWIcon from '../Icons/TWIcon';
import IMIcon from '../Icons/IMIcon';
import WPIcon from '../Icons/WPIcon';
import { HOME, SERVICES, CONTACT, ABOUT_US, FACEBOOK, LINKEDIN, INSTAGRAM, TWITTER, WHATSAPP } from '../../constants/routePaths';


export interface FooterProps {
    handleClick: (link: string, external?: boolean) => void
}

const styles = {
    mainTextStyle: {
    },
    secondaryTextStyle: {
        transition: 'color 0.25s',
        '&:hover': { color: '#22B573', cursor: 'pointer' }
    },
    socialMediaButtonsStyle: {
        transition: 'filter 0.25s',
        '&:hover': { filter: 'brightness(150%)' }
    },
    mainTextSize: {
        xl: 20,
        lg: 18,
        md: 16,
        sm: 13,
        xs: 10,
    }
}

export default function Footer(FooterProps: FooterProps) {
    const { handleClick } = FooterProps
    const { t, i18n } = useTranslation();
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.only('xs'))
    const tablet = useMediaQuery(theme.breakpoints.only('sm'))

    const MenuList = [
        {
            id: 'menu',
            component: <Typography variant='secondary' fontSize={styles.mainTextSize} sx={styles.mainTextStyle}>{t('footer.menu')}</Typography>,
        },
        {
            id: 'home',
            component: <Typography fontSize={styles.mainTextSize} onClick={() => handleClick(HOME)} variant='main' sx={styles.secondaryTextStyle}>{t('menus.home')}</Typography>,
        },
        {
            id: 'services',
            component: <Typography fontSize={styles.mainTextSize} onClick={() => handleClick(SERVICES)} variant='main' sx={styles.secondaryTextStyle}>{t('menus.services')}</Typography>,
        },
        {
            id: 'about_us',
            component: <Typography fontSize={styles.mainTextSize} onClick={() => handleClick(ABOUT_US)} variant='main' sx={styles.secondaryTextStyle}>{t('menus.about_us')}</Typography>,
        },
        {
            id: 'contact',
            component: <Typography fontSize={styles.mainTextSize} onClick={() => handleClick(CONTACT)} variant='main' sx={styles.secondaryTextStyle}>{t('menus.contact')}</Typography>,
        }
    ]

    const ContactList = [
        {
            id: 'phone',
            component: <Typography variant='main' fontSize={styles.mainTextSize}>(+54) 11 3074-8591</Typography>
        },
        {
            id: 'mail',
            component: <Typography variant='main' fontSize={styles.mainTextSize}>contacto@dream-doit.com</Typography>
        },
        {
            id: 'address',
            component: <Typography variant='main' fontSize={styles.mainTextSize}>Villa del Parque, Capital Federal.</Typography>
        },
        {
            id: 'country',
            component: <Typography variant='main' fontSize={styles.mainTextSize}>Argentina</Typography>
        },
    ]

    const IconList = [
        {
            id: 'FB',
            component: <IconButton onClick={() => handleClick(FACEBOOK, true)} sx={styles.socialMediaButtonsStyle}><FBIcon sx={{ height: '4vw', width: '3vw', minWidth: '35px', minHeight: '52.5px' }} /></IconButton>
        },
        {
            id: 'LN',
            component: <IconButton onClick={() => handleClick(LINKEDIN, true)} sx={styles.socialMediaButtonsStyle}><LNIcon sx={{ height: '4vw', width: '3vw', minWidth: '35px', minHeight: '52.5px' }} /></IconButton>
        },
        {
            id: 'IM',
            component: <IconButton onClick={() => handleClick(INSTAGRAM, true)} sx={styles.socialMediaButtonsStyle}><IMIcon sx={{ height: '4vw', width: '3vw', minWidth: '35px', minHeight: '52.5px' }} /></IconButton>
        },
        {
            id: 'TW',
            component: <IconButton onClick={() => handleClick(TWITTER, true)} sx={styles.socialMediaButtonsStyle}><TWIcon sx={{ height: '4vw', width: '3vw', minWidth: '35px', minHeight: '52.5px' }} /></IconButton>
        },
    ]


    return (
        <Box position='relative' bottom='250px' sx={{ height: '0px' }}>
            {(mobile || tablet) ?
                <Box>
                    <Box sx={{ marginX: '5vw', backgroundColor: 'rgb(207, 211, 207, 0.5)', height: '2px' }} />
                    <Grid container>
                        <Grid item container xs={12}>
                            <Grid item container xs={2} />
                            {IconList.map((icon) => {
                                return (
                                    <Grid item container xs={2} justifyContent='center'>
                                        {icon.component}
                                    </Grid>
                                )
                            })}
                            <Grid item container xs={2} />
                        </Grid>
                        <Grid item container xs={12} justifyContent='center'>
                            <Box>
                                <Grid container>
                                    {ContactList.map((item) => {
                                        return (
                                            <Grid item container xs={12} key={item.id} justifyContent='center'>
                                                {item.component}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item container xs={12} justifyContent="center">
                            <Box>
                                <IconButton onClick={() => handleClick(WHATSAPP, true)} sx={styles.socialMediaButtonsStyle}><WPIcon sx={{ height: '4vw', width: '3vw', minWidth: '35px', minHeight: '52.5px' }} /><Typography variant='main' fontSize={styles.mainTextSize}>Click aquí para Whatsapp</Typography></IconButton>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                :
                <Box>
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
                                    <Grid item xs={12}>
                                        <Typography variant='secondary' fontSize={styles.mainTextSize} sx={styles.mainTextStyle}>{t('menus.contact')}</Typography>
                                    </Grid>
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
            }
        </Box>
    )
}
