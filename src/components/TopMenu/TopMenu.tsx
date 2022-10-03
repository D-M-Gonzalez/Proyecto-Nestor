import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useMediaQuery, Typography, IconButton, Toolbar, Box, AppBar, MenuItem, Button, Switch, Stack, Drawer, useTheme } from '@mui/material';
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
  color: '#22B573',
  '&:focus': {
    color: 'red',
  }
}

export const TopMenu = () => {

  const [anchorElNav, setAnchorElNav] = useState(false);
  const { t, i18n } = useTranslation();
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.only('xs'))

  const pages = [
    {
      title: t('menus.home'),
      key: 'home',
      variant: 'contained',
      url: '/',
      icon: <HomeIcon sx={{ marginRight: '20px' }} />
    },
    {
      title: t('menus.about_us'),
      key: 'about_us',
      variant: 'contained',
      url: 'about-us',
      icon: <AboutUsIcon sx={{ marginRight: '20px' }} />
    },
    {
      title: t('menus.services'),
      key: 'services',
      variant: 'contained',
      url: 'services',
      icon: <ServicesIcon sx={{ marginRight: '20px' }} />
    },
    {
      title: t('menus.contact'),
      key: 'contact',
      variant: 'contained',
      url: 'contact',
      icon: <ContactIcon sx={{ marginRight: '20px' }} />
    }
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(true);
  };


  const handleLanguaje = (languaje: string) => {
    i18n.changeLanguage(languaje)
  }

  const handleCloseNavMenu = () => {
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
              onClose={handleCloseNavMenu}
              PaperProps={{ sx: { backgroundColor: '#0A1128' } }}
            >
              <Box sx={{ width: '200px' }} mx={2} mt={5}>
                <Box component="img" sx={{ width: '200px' }} src={logo} />
                <Box mt={3}>
                  {pages.map((page) => (
                    <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                      <Link to={page.url} style={{ textDecoration: "none", color: "#000" }}><Typography textAlign="center" sx={{ ...drawerItemStyles }}>{page.icon}{page.title}</Typography></Link>
                    </MenuItem>
                  ))}
                </Box>
                <Box mt={3} ml={2}>
                  <Stack direction="row" alignItems="center">
                    <LanguageIcon sx={{ mr: 2, fontSize: { xl: 40, lg: 35, md: 30, xs: 30 }, color: '#22B573' }} />
                    <Typography fontSize={{ xl: 20, lg: 18, md: 15, sm: 15, xs: 15 }} sx={{ color: '#22B573' }}>ES</Typography>
                    <Box sx={{ filter: 'invert(53%) sepia(94%) saturate(352%) hue-rotate(101deg) brightness(89%) contrast(92%)' }}>
                      <Switch defaultChecked color='default' onChange={(event, boolean) => (!boolean ? handleLanguaje('es') : handleLanguaje('en'))} />
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
            {pages.map((page) => (
              <Link to={page.url} key={page.key} style={{ textDecoration: "none", color: "#fff" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ mx: 1, display: 'block', '&: focus': { color: '#fff' }, fontSize: '2vw' }}
                  variant={page.variant as keyof typeof Button}
                >
                  <Typography fontSize={{ xl: 35, lg: 30, md: 18 }}>{page.title}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
          {!mobile && (
            <Box>
              <Stack direction="row" alignItems="center">
                <LanguageIcon sx={{ mr: 2, fontSize: { xl: 40, lg: 35, md: 30 } }} />
                <Typography fontSize={{ xl: 20, lg: 18, md: 15, sm: 15, xs: 15 }}>ES</Typography>
                <Box sx={{ filter: 'invert(53%) sepia(94%) saturate(352%) hue-rotate(101deg) brightness(89%) contrast(92%)' }}>
                  <Switch defaultChecked color='default' onChange={(event, boolean) => (!boolean ? handleLanguaje('es') : handleLanguaje('en'))} />
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
