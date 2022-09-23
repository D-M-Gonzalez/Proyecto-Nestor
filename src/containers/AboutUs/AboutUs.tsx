import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useImageMultiplier } from '../../store/Main';

export interface IAboutUsProps { }

export default function AboutUs(props: IAboutUsProps) {
    const { imageSizeMultiplier } = useImageMultiplier();
    const { t } = useTranslation();

    useEffect(() => {
        console.log(imageSizeMultiplier)
    })

    return <div>AboutUs</div>;
}
