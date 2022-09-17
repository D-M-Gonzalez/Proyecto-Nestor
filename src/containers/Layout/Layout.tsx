import { AppBar, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export interface ILayoutProps {}

export default function Layout(props: ILayoutProps) {
    const [something, setSomething] = useState(0);
    return (
        <>
            <Button variant="text">
                <Typography>Home</Typography>
            </Button>
            <Outlet></Outlet>
        </>
    );
}
