import { createTheme } from '@mui/material/styles';
import { borderBottomColor, borderTop } from '@mui/system';
import React from 'react';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        main: React.CSSProperties;
        secondary: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        main?: React.CSSProperties;
        secondary?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        main: true;
        secondary: true;
    }
}

export const customTheme = createTheme({
    typography: {
        main: {
            color: 'white',
            fontSize: '20px',
            lineHeight: '27.28px',
            fontFamily: 'Nunito Sans'
        },
        secondary: {
            color: '#22B573',
            fontSize: '20px',
            lineHeight: '27.28px',
            fontFamily: 'Nunito Sans'
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        borderRadius: '16px',
                        backgroundColor: 'rgb(255, 255, 255, 0)',
                        boxShadow: 'none',
                        textTransform: 'unset',
                        padding: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        color: 'white',
                        fontSize: '30px',
                        lineHeight: '27.28px',
                        fontFamily: 'Nunito Sans',
                        '&:focus': {
                            backgroundColor: '#22B573'
                        },
                        '&:hover': {
                            backgroundColor: 'rgb(150,150,150,0.35)'
                        }
                    }
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        borderRadius: '10px',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: '#22B573',
                        textTransform: 'unset',
                        padding: '4px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        color: '#22B573',
                        fontSize: '20px',
                        fontWeight: '600',
                        transition: '0s',
                        lineHeight: '27.28px',
                        fontFamily: 'Nunito Sans',
                        '&:focus': {
                            color: 'black'
                        },
                        '&:hover': {
                            borderRadius: '10px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            backdropFilter: 'brightness(150%)',
                            background: 'linear-gradient(180deg, #22B573 0%, #255957 100%) border-box',
                            color: 'rgb(255,255,255)',
                            borderColor: 'rgb(255,255,255,0)'
                        }
                    }
                }
            ]
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
