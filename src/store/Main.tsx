import React, { useEffect, useState } from 'react'
import { customTheme } from '../MuiTheme';
import { useMediaQuery, useTheme } from '@mui/material/';
import { Outlet, useOutletContext } from 'react-router-dom'

export interface MainProps {
    layoutRef: React.RefObject<any>
}

type ContextType = { imageSizeMultiplier: number }

export default function Main(props: MainProps) {

    const [size, setSize] = useState(1)

    const theme = useTheme()
    const imageSize = [
        {
            multiplier: 0.7,
            value: useMediaQuery(theme.breakpoints.only('xs')),
        },
        {
            multiplier: 0.7,
            value: useMediaQuery(theme.breakpoints.only('sm')),
        },
        {
            multiplier: 0.9,
            value: useMediaQuery(theme.breakpoints.only('md')),
        },
        {
            multiplier: 1.05,
            value: useMediaQuery(theme.breakpoints.only('lg')),
        },
        {
            multiplier: 1.2,
            value: useMediaQuery(theme.breakpoints.only('xl')),
        },
    ]

    useEffect(() => {
        const found = imageSize.find((el) => {
            return el.value === true;
        })
        setSize(found ? found.multiplier : 1)
    }, [JSON.stringify(imageSize)])

    return (
        <Outlet context={{ imageSizeMultiplier: size, }}></Outlet>
    )

}

export function useImageMultiplier() {
    return useOutletContext<ContextType>()
}