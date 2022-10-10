import { AppBar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { TopMenu } from '../../components/TopMenu/TopMenu';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import Navigate from '../../routes/Navigator';
import Main from '../../store/Main';
import { styled } from '@mui/material/styles';

export interface ILayoutProps { }

type GradientBoxProps = {
  colors?: string[];
};
const GradientBox = styled(Box)<GradientBoxProps>(() => ({
  background: `linear-gradient(135.44deg, #0A1128 0%, #22B573 247.42%)`,
}));


export default function Layout(props: ILayoutProps) {
  const nav = useNavigate()
  const layoutRef = useRef()

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
    <GradientBox >
      <TopMenu />
      <Main layoutRef={layoutRef}></Main>
      <Footer handleClick={handleNavigationClick} />
      <ToTopButton handleClick={handleToTopClick} />
    </GradientBox>
  );
}
