import { Icon } from '@mui/material';
import styles from './Icon.module.css';

export interface IconProps {
    sx: React.CSSProperties
}

export default function ServicesIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <img className={styles.icon} src="/assets/ServicesIcon.svg" />
        </Icon>
    );
}
