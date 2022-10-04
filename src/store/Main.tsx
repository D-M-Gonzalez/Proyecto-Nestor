import React, { useEffect, useState } from 'react'
import { customTheme } from '../MuiTheme';
import { useMediaQuery, useTheme } from '@mui/material/';
import { Outlet, useOutletContext } from 'react-router-dom'

export interface MainProps {
    layoutRef: React.RefObject<any>
}

type ContextType = { imageSizeMultiplier: number, screenSize: string }

export default function Main(props: MainProps) {

    const [size, setSize] = useState({
        multiplier: 1.05,
        size: 'lg',
    })

    const theme = useTheme()
    const imageSize = [
        {
            multiplier: 0.7,
            value: useMediaQuery(theme.breakpoints.only('xs')),
            id: 'xs'
        },
        {
            multiplier: 0.7,
            value: useMediaQuery(theme.breakpoints.only('sm')),
            id: 'sm'
        },
        {
            multiplier: 0.9,
            value: useMediaQuery(theme.breakpoints.only('md')),
            id: 'md'
        },
        {
            multiplier: 1.05,
            value: useMediaQuery(theme.breakpoints.only('lg')),
            id: 'lg'
        },
        {
            multiplier: 1.2,
            value: useMediaQuery(theme.breakpoints.only('xl')),
            id: 'xl'
        },
    ]

    useEffect(() => {
        const found = imageSize.find((el) => {
            return el.value === true;
        })
        setSize(found ? { multiplier: found.multiplier, size: found.id } : { multiplier: 1.05, size: 'lg' })

    }, [JSON.stringify(imageSize)])

    return (
        <Outlet context={{ imageSizeMultiplier: size.multiplier, screenSize: size.size }}></Outlet>
    )

}

export function useImageMultiplier() {
    return useOutletContext<ContextType>()
}