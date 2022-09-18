import { AppBar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { TopMenu } from '../../components/TopMenu/TopMenu';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import Navigate from '../../routes/Navigator';

export interface ILayoutProps { }

export default function Layout(props: ILayoutProps) {
  const nav = useNavigate()

  const handleNavigationClick = (link: string, external: boolean = false) => {
    !external ? nav(`${Navigate(link)}`) : window.open(`${Navigate(link)}`, '_blank', 'noopener,noreferrer')
  }

  const handleToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Box sx={{ backgroundColor: '#0A1128' }}>
      <TopMenu />
      <Outlet></Outlet>
      <Footer handleClick={handleNavigationClick} />
      <ToTopButton handleClick={handleToTopClick} />
    </Box>
  );
}
