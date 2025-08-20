import { useForm, useWatch } from "react-hook-form";
import Button from "../../shared/components/button";
import { CheckBox } from "../../shared/components/check-box";
import { TextInput } from "../../shared/components/text-input";
import { BusinessDetailsSection } from "./components/business-details";
import "./styles.scss";

export type SignupProps = {
    onSubmit: (data: any) => void;
    onExtend: () => void;
}

export type SignUpData = {
    email: string;
    businessOwner?: boolean;
    businessName?: string;
    businessWebsite?: string;
    businessAddress?: string;
}

export default function Signup(props: SignupProps) {

    const { onSubmit, onExtend, ...rest } = props;
    const { register, handleSubmit, control, formState: { errors, isValid } } = useForm<SignUpData>({
        mode: "onChange",
    });
    const isBusinessOwner = useWatch({ name: "businessOwner", control });

    return (
        <div id="signup-container">
            <h1>Early access</h1>

            <form onSubmit={handleSubmit(onSubmit)} {...rest}>

                <TextInput
                    type="email"
                    placeholder="Your@email.com"
                    autoComplete="email"
                    message="Don't worry, we won't spam you"
                    error={errors.email?.message}
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email",
                        }
                    })}
                />

                <CheckBox id="checkbox" onClick={onExtend} label={"I am a business owner"} {...register("businessOwner")} />

                {isBusinessOwner && <BusinessDetailsSection register={register} errors={errors} />}

                <Button id="submit" type="submit" disabled={!isValid}>Join now</Button>
            </form>

        </div>
    )
}