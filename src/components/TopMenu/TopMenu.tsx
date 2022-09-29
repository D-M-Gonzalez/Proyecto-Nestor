import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/logo-dream-do-it-dark.svg';
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import LanguageIcon from '@mui/icons-material/Language';


export interface ITopMenu { }

export const TopMenu = () => {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const pages = [
    {
      title: t('menus.home'),
      key: 'home',
      variant: 'contained',
      url: '/'
    },
    {
      title: t('menus.about_us'),
      key: 'about_us',
      variant: 'contained',
      url: 'about-us'
    },
    {
      title: t('menus.services'),
      key: 'services',
      variant: 'contained',
      url: 'services'
    },
    {
      title: t('menus.contact'),
      key: 'contact',
      variant: 'contained',
      url: 'contact'
    }
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleLanguaje = (languaje: string) => {
    i18n.changeLanguage(languaje)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                  <Link to={page.url} style={{ textDecoration: "none", color: "#000" }}><Typography textAlign="center">{page.title}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
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
        </Toolbar>
      </Box>
    </AppBar >
  )
}
