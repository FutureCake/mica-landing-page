import { type ButtonHTMLAttributes } from 'react';
import './styles.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {

    const { children, className, disabled, ...rest } = props;

    return (
        <button {...rest} disabled={disabled} className={["button", className, (disabled && "button-disabled")].join(' ')}>
            {children}
        </button>
    );
}