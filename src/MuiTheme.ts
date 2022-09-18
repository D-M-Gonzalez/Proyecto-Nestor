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
                        padding: '6px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        color: 'white',
                        fontSize: '20px',
                        lineHeight: '27.28px',
                        fontFamily: 'Nunito Sans',
                        '&:focus': {
                            color: 'black'
                        },
                        '&:hover': {
                            backgroundColor: '#22B573'
                        }
                    }
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        borderRadius: '10px',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: 'rgb(255, 255, 255, 0)',
                        textTransform: 'unset',
                        padding: '4px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        color: '#22B573',
                        fontSize: '20px',
                        lineHeight: '27.28px',
                        fontFamily: 'Nunito Sans',
                        '&:focus': {
                            color: 'black'
                        },
                        '&:hover': {
                            borderRadius: '10px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            backgroundColor: 'rgb(255, 255, 255, 0)',
                            borderColor: '#255957',
                            color: '#255957'
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
