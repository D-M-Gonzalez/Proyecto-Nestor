import { Box, Typography } from '@mui/material';
import React from 'react';

export interface IHomeProps { }

export default function Home(props: IHomeProps) {
    return (
        <Box sx={{ height: '3400px' }}>
            <Typography>Home</Typography>
        </Box>
    );
}
