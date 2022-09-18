import { AppBar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { TopMenu } from '../../components/TopMenu/TopMenu';

export interface ILayoutProps { }

export default function Layout(props: ILayoutProps) {
  return (
    <Box sx={{ backgroundColor: '#0A1128' }}>
      <TopMenu />
      <Outlet></Outlet>
      <Footer />
    </Box>
  );
}
