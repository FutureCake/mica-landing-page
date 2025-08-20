import { forwardRef, type InputHTMLAttributes } from "react";
import "./styles.scss";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {

    const { label, error, id, className, ...rest } = props;

    return (
        <div className={["text-input-container", className].join(" ")} id={id}>
            <label className="text-input-wrapper">
                {label && (<span className="text-input-label">{label}</span>)}
                <input {...rest} className={["text-input-element", (error && "error")].join(' ')} ref={ref} />
            </label>
            {error && (<span className="text-input-error">{error}</span>)}
        </div>
    );
});