import { type ButtonHTMLAttributes } from 'react';
import useColorTheme from '../../contexts/color/hook';
import './styles.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {

    const { children, className, disabled, ...rest } = props;

    const { primary } = useColorTheme();

    return (
        <button
            {...rest}
            disabled={disabled}
            className={["button", className, (disabled && "button-disabled")].join(' ')}
            style={{ background: primary }}
        >
            {children}
        </button>
    );
}