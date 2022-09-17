import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'text' },
                    style: {
                        borderRadius: '16px',
                        backgroundColor: '#22B573',
                        textTransform: 'unset',
                        padding: '6px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        '&:focus': {
                            color: 'black'
                        },
                        '&:hover': {
                            backgroundColor: 'CFD3CF 0.3'
                        }
                    }
                }
            ]
        },
        MuiTypography: {
            defaultProps: {
                color: 'white',
                fontSize: '20px',
                lineHeight: '27.28px',
                fontFamily: 'Nunito Sans'
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgb(255, 182, 193, 0.5)'
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'red'
                }
            }
        }
    }
});
