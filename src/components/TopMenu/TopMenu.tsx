import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/logo-dream-do-it-dark.svg';
import { useTranslation } from 'react-i18next';
import { Switch } from '@mui/material';

//import Navigate from '../../routes/Navigator';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export interface ITopMenu { }

export const TopMenu = () => {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
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
      url: 'about_us'
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
      color: '#22B573',
      url: 'contact'
    }
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLanguaje = (languaje: string) => {
    i18n.changeLanguage(languaje)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='absolute' sx={{ backgroundColor: '#0A1128', height: '100px' }}>
      <Box mt={1.5} sx={{ marginX: '5vw' }}>
        <Toolbar disableGutters>
          <Box component="img" sx={{ width: 220, display: { xs: 'none', md: 'flex' } }} src={logo} />
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
          <Box component="img" sx={{ width: 220, display: { xs: 'flex', md: 'none' } }} src={logo} />
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
          <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.url} key={page.key} style={{ textDecoration: "none", color: "#fff" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 2, display: 'block', color: `${page.color ? page.color : "#fff"}`, '&: focus': { color: '#fff' } }}
                  variant={page.variant as keyof typeof Button}
                >
                  {page.title}
                </Button>

              </Link>

            ))}
          </Box>
          <Box>
            <Button
              id='ES'
              variant='outlined'
              onClick={() => handleLanguaje('es')}
              sx={{
                borderRadius: '0px', '&:hover': {
                  borderRadius: '0px',
                }
              }}
            >
              ES
            </Button>
            <Button
              id='EN'
              variant='outlined'
              onClick={() => handleLanguaje('en')}
              sx={{
                borderRadius: '0px', '&:hover': {
                  borderRadius: '0px',
                }
              }}
            >
              EN
            </Button>
            <Switch onChange={(event, boolean) => (boolean ? handleLanguaje('es') : handleLanguaje('en'))} />
          </Box>
        </Toolbar>
      </Box>
    </AppBar >
  )
}
