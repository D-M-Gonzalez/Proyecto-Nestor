import React from 'react';
import { Outlet } from 'react-router-dom';

export interface ILayoutProps {}

export default function Layout(props: ILayoutProps) {
    return (
        <>
            <div>Layout</div>
            <Outlet></Outlet>
        </>
    );
}
