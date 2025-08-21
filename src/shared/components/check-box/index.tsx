import { forwardRef, useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import useColorTheme from "../../contexts/color/hook";
import "./styles.scss";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export const CheckBox = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {

    const { label, id, className, onChange, ...rest } = props;

    const { text } = useColorTheme();
    const [selected, setSelected] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.checked);
        if (onChange) onChange(e);
    };

    return (
        <label id={id} className={["check-box-container", className].join(" ")}>
            <div className="check-box-element-wrapper" style={{ borderColor: text }}>
                <input {...rest} type="checkbox" className="check-box-element" ref={ref} onChange={onChangeHandler} />
                {selected && <div className="check-box-element-selected" style={{ background: text }} />}
            </div>

            <span className="check-box-label" style={{ color: text }}>{label}</span>
        </label>
    );
});