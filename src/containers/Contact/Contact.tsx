import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useImageMultiplier } from '../../store/Main';

export interface IContactProps { }

export default function Contact(props: IContactProps) {
    const { imageSizeMultiplier } = useImageMultiplier();
    const { t } = useTranslation();

    useEffect(() => {
        console.log(imageSizeMultiplier)
    })

    return <div>Contact</div>;
}
