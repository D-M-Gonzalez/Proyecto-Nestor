import { Icon } from '@mui/material';
import styles from './Icon.module.css';

export interface IconProps {
    sx: React.CSSProperties
}

export default function WPIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <img className={styles.icon} src="/assets/footerWP.svg" />
        </Icon>
    );
}