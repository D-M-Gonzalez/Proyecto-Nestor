import React from 'react';
import { Icon } from '@mui/material';
import styles from './Icon.module.css';

export default function FBIcon(props) {
    return (
        <Icon sx={{ height: '42.71px', width: '42.71' }}>
            <img className={styles.icon} src="/assets/footerFB.svg" />
        </Icon>
    );
}
