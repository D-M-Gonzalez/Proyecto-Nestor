import { Box, IconButton } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface ToTopButtonProps {
    handleClick: () => void
}

export default function ToTopButton(props: ToTopButtonProps) {
    const { handleClick } = props
    return (
        <Box position='relative' bottom={{ xl: 400, lg: 400, md: 350, sm: 300, xs: 300 }} left={{ xl: '90vw', lg: '88vw', md: '85vw', sm: '82vw', xs: '80vw' }} sx={{ height: '0px', width: '0px' }}>
            <IconButton onClick={() => handleClick()} sx={{ height: { xl: 80, lg: 70, md: 60, sm: 50, xs: 40 }, width: { xl: 80, lg: 70, md: 60, sm: 50, xs: 40 }, transition: 'filter 0.25s', background: 'linear-gradient(180deg, #22B573 0%, #255957 100%)', '&:hover': { filter: 'brightness(125%)', backgroundColor: 'rgb(255,255,255,0)' }, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.25)' }} >
                <KeyboardArrowUpIcon htmlColor='white' sx={{ height: '2.5vw', width: '3.5vw', borderRadius: '100%' }} />
            </IconButton>
        </Box>
    )
}
