import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery, Typography, IconButton, Toolbar, Box, AppBar, MenuItem, Button, Switch, Stack, Drawer, useTheme, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo-dream-do-it-dark.svg';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '../Icons/HomeIcon';
import AboutUsIcon from '../Icons/ContactIcon';
import ServicesIcon from '../Icons/ServicesIcon';
import ContactIcon from '../Icons/AboutUsIcon';


export interface ITopMenu { }

const drawerItemStyles = {
  transition: 'background-color 0.2s',
  '&:focus': {
    backgroundColor: '#22B573',
  },
  '&:hover': {
    backgroundColor: '#22B573',
  }
}

export const TopMenu = () => {

  const [anchorElNav, setAnchorElNav] = useState(false);
  const [visited, setVisited] = useState<string>('/')
  const { t, i18n } = useTranslation();
  const URL = useLocation();
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.only('xs'))
  const tablet = useMediaQuery(theme.breakpoints.only('sm'))

  useEffect(() => {
    setVisited(URL.pathname.replace('/', ''))
  }, [URL])

  const pages = [
    {
      title: t('menus.home'),
      key: 'home',
      variant: 'contained',
      url: '/',
      color: '#FFF',
      icon: HomeIcon
    },
    {
      title: t('menus.about_us'),
      key: 'about_us',
      variant: 'contained',
      url: 'about-us',
      color: '#FFF',
      icon: AboutUsIcon
    },
    {
      title: t('menus.services'),
      key: 'services',
      variant: 'contained',
      url: 'services',
      color: '#FFF',
      icon: ServicesIcon
    },
    {
      title: t('menus.contact'),
      key: 'contact',
      variant: 'contained',
      url: 'contact',
      color: '#22B573',
      icon: ContactIcon
    }
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(true);
  };


  const handleLanguaje = (languaje: string) => {
    i18n.changeLanguage(languaje)
  }

  const handleCloseNavMenu = (url: string) => () => {
    setVisited(url)
    setAnchorElNav(false);
  };

  return (
    <AppBar position='absolute' sx={{ backgroundColor: '#0A1128', height: '100px' }}>
      <Box mt={{ xl: 1.8, lg: 2.3, md: 2.4, sm: 2.4, xs: 2.9 }} sx={{ marginX: { xl: 5, lg: 5, md: 3.5, sm: 5, xs: 2 } }}>
        <Toolbar disableGutters>
          <Box component="img" sx={{ width: '20vw', maxWidth: '300px', display: { xs: 'none', md: 'flex' } }} src={logo} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id="menu-appbar"
              anchor='left'
              open={anchorElNav}
              onClose={handleCloseNavMenu('')}
              PaperProps={{ sx: { backgroundColor: '#0A1128' } }}
            >
              <Box sx={{ width: '200px' }} mt={5} mx={2}>
                <Box component="img" sx={{ width: '200px' }} src={logo} />
                <Box mt={3}>
                  {pages.map((page) => (
                    <MenuItem key={page.key} onClick={handleCloseNavMenu(page.url)} sx={{ ...drawerItemStyles, backgroundColor: (visited === page.url ? '#22B573' : '#0A1128'), borderRadius: '10px', mt: '5px' }}>
                      <Link to={page.url} style={{ ...drawerItemStyles, textDecoration: "none", color: "#000", width: '100%' }}>
                        <Grid container mt={0.5}>
                          <Grid item container xs={3}>
                            <Typography sx={{ filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(312deg) brightness(102%) contrast(102%)" }}><page.icon sx={{}} /></Typography>
                          </Grid>
                          <Grid item container xs={9} justifyContent='flex-start'>
                            <Typography mt={0.2} sx={{ filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(312deg) brightness(102%) contrast(102%)" }}>{page.title}</Typography>
                          </Grid>
                        </Grid>
                      </Link>
                    </MenuItem>
                  ))}
                </Box>
                <Box mt={3} ml={2}>
                  <Stack direction="row" alignItems="center">
                    <LanguageIcon sx={{ mr: 2, fontSize: { xl: 40, lg: 35, md: 30, xs: 30 }, color: '#FFF' }} />
                    <Typography fontSize={{ xl: 20, lg: 18, md: 15, sm: 15, xs: 15 }} sx={{ color: '#22B573' }}>ES</Typography>
                    <Box>
                      <Switch
                        defaultChecked
                        onChange={(event, boolean) => (!boolean ? handleLanguaje('es') : handleLanguaje('en'))}
                        sx={{ mx: '5px' }}
                      />
                    </Box>
                    <Typography fontSize={{ xl: 20, lg: 18, md: 15, sm: 15, xs: 15 }} sx={{ color: '#22B573' }}>EN</Typography>
                  </Stack>
                </Box>
              </Box>
            </Drawer>
          </Box>
          <Box component="img" sx={{ width: 180, display: { xs: 'flex', md: 'none' } }} src={logo} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              return (
                <Link to={page.url} key={page.key} style={{ textDecoration: "none", color: "#fff" }}>
                  <Button
                    onClick={handleCloseNavMenu(page.url)}
                    sx={{ mx: 1, display: 'block', fontSize: '2vw', backgroundColor: (visited === page.url ? '#22B573' : '#0A1128') }}
                    variant={page.variant as keyof typeof Button}
                  >
                    <Typography fontSize={{ xl: 35, lg: 30, md: 16 }} sx={{ color: (visited === page.url ? '#FFF' : page.color) }}>{page.title}</Typography>
                  </Button>
                </Link>
              )
            }
            )}
          </Box>
          {!mobile && !tablet && (
            <Box>
              <Stack direction="row" alignItems="center">
                <LanguageIcon sx={{ mr: 2, fontSize: { xl: 40, lg: 35, md: 30 }, color: '#FFF' }} />
                <Typography fontSize={{ xl: 20, lg: 18, md: 15, sm: 15, xs: 15 }}>ES</Typography>
                <Box>
                  <Switch
                    defaultChecked
                    onChange={(event, boolean) => (!boolean ? handleLanguaje('es') : handleLanguaje('en'))}
                    sx={{ mx: '5px' }}
                  />
                </Box>
                <Typography fontSize={{ xl: 20, lg: 18, md: 15, sm: 15, xs: 15 }}>EN</Typography>
              </Stack>
            </Box>
          )}
        </Toolbar>
      </Box>
    </AppBar >
  )
}
