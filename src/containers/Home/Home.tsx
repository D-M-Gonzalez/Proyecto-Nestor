import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export interface IHomeProps { }

export default function Home(props: IHomeProps) {
    return (
        <Box sx={{ height: '3400px' }}>
            <Button variant='outlined' sx={{ margin: '20px' }}>
                Hola Mundo
            </Button>
        </Box>
    );
}
