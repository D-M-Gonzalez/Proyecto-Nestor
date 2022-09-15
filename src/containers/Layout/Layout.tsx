import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopMenu } from '../../components/TopMenu/TopMenu';

export interface ILayoutProps { }

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <TopMenu />
      <Outlet></Outlet>
    </>
  );
}
