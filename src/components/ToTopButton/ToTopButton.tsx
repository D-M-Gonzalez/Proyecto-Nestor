import { Box, Grid, IconButton } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import UPIcon from '../Icons/UPIcon';
import { useMediaQuery, useTheme } from '@mui/material';

export interface ToTopButtonProps {
    handleClick: () => void
}



export default function ToTopButton(props: ToTopButtonProps) {


    const { handleClick } = props

    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.only('xs'))
    const tablet = useMediaQuery(theme.breakpoints.only('sm'))


    return (
        <Box>
            {(mobile || tablet) ?

                <Box position='relative' bottom={{ sm: 350, xs: 350 }} left={{ sm: '40vw', xs: '40vw' }} sx={{ height: '0px', width: '0px' }}>
                    <IconButton onClick={() => handleClick()} >
                        <UPIcon sx={{ height: '15vw', width: '15vw' }} />
                    </IconButton>
                </Box>
                :
                <Box position='relative' bottom={{ xl: 400, lg: 400, md: 350, sm: 300, xs: 300 }} left={{ xl: '90vw', lg: '88vw', md: '85vw', sm: '82vw', xs: '80vw' }} sx={{ height: '0px', width: '0px' }}>
                    <IconButton onClick={() => handleClick()} sx={{ height: { xl: 80, lg: 70, md: 60, sm: 50, xs: 40 }, width: { xl: 80, lg: 70, md: 60, sm: 50, xs: 40 }, transition: 'filter 0.25s', background: 'linear-gradient(180deg, #22B573 0%, #255957 100%)', '&:hover': { filter: 'brightness(125%)', backgroundColor: 'rgb(255,255,255,0)' }, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.25)' }} >
                        <KeyboardArrowUpIcon htmlColor='white' sx={{ height: '2.5vw', width: '3.5vw', borderRadius: '100%', minHeight: '20px', minWidth: '30px' }} />
                    </IconButton>
                </Box>
            }
        </Box>

    )
}
