import { Box, IconButton } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface ToTopButtonProps {
    handleClick: () => void
}

export default function ToTopButton(props: ToTopButtonProps) {
    const { handleClick } = props
    return (
        <Box position='fixed' right='53px' bottom='250px'>
            <IconButton onClick={() => handleClick()} sx={{ height: '4vw', width: '4vw', transition: 'filter 0.25s', background: 'linear-gradient(180deg, #22B573 0%, #255957 100%)', '&:hover': { filter: 'brightness(150%)', backgroundColor: 'rgb(255,255,255,0)' }, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.25)' }} >
                <KeyboardArrowUpIcon htmlColor='white' sx={{ height: '2.5vw', width: '2.5vw', borderRadius: '100%' }} />
            </IconButton>
        </Box>
    )
}
