import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useImageMultiplier } from '../../store/Main';

export interface IServicesProps { }

export default function Services(props: IServicesProps) {
    const { imageSizeMultiplier } = useImageMultiplier();
    const { t } = useTranslation();

    useEffect(() => {
        console.log(imageSizeMultiplier)
    })

    return <div>Services</div>;
}
