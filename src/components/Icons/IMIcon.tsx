import { Icon } from '@mui/material';
import styles from './Icon.module.css';

export interface IconProps {
    sx: React.CSSProperties
}

export default function IMIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <img className={styles.icon} src="/assets/footerIM.svg" />
        </Icon>
    );
}
