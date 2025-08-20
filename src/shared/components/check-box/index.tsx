import { forwardRef, useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import "./styles.scss";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export const CheckBox = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {

    const { label, id, className, onChange, ...rest } = props;

    const [selected, setSelected] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.checked);
        if (onChange) onChange(e);
    };

    return (
        <label className={["check-box-container", className].join(" ")}>
            <div className="check-box-element-wrapper">
                <input {...rest} type="checkbox" className="check-box-element" ref={ref} onChange={onChangeHandler} />
                {selected && (<div className="check-box-element-selected" />)}
            </div>

            <span className="check-box-label">{label}</span>
        </label>
    );
});