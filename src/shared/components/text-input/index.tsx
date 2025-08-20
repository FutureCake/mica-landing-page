import { forwardRef, useEffect, useState, type FocusEvent, type InputHTMLAttributes } from "react";
import "./styles.scss";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    message?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {

    const { label, error, id, className, message, onBlur, ...rest } = props;

    const [inputMsg, setInputMsg] = useState<string | undefined>(message);

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
        setInputMsg(error ? error : undefined);
        onBlur?.(e);
    }

    useEffect(() => {
        if (!error) setInputMsg(message);
    }, [error]);

    return (
        <div className={["text-input-container", className].join(" ")} id={id}>
            <label className="text-input-wrapper">
                {label && (<span className="text-input-label">{label}</span>)}
                <input {...rest} onBlur={handleBlur} className={["text-input-element", (error && "error")].join(' ')} ref={ref} />
            </label>
            {(inputMsg !== undefined) && <span className="text-input-message">{inputMsg}</span>}
        </div>
    );
});