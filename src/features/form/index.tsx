import { useForm, useWatch } from "react-hook-form";
import Button from "../../shared/components/button";
import { CheckBox } from "../../shared/components/check-box";
import { TextInput } from "../../shared/components/text-input";
import useColorTheme from "../../shared/contexts/color/hook";
import { BusinessDetailsSection } from "./components/business-details";
import useSignup from "./hooks/signup";
import "./styles.scss";

export type SignUpData = {
    email: string;
    businessOwner?: boolean;
    businessName?: string;
    businessWebsite?: string;
    businessAddress?: string;
}

export default function Signup() {

    const { text, primary } = useColorTheme();
    const { onSubmit, response } = useSignup();
    const { register, handleSubmit, control, formState: { errors, isValid } } = useForm<SignUpData>({
        mode: "onChange",
    });
    const isBusinessOwner = useWatch({ name: "businessOwner", control });

    return (
        <div id="signup-container">
            <h1 style={{ color: text }}>Early access</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

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

                <CheckBox id="checkbox" label={"I am a business owner"} {...register("businessOwner")} />

                {isBusinessOwner && <BusinessDetailsSection register={register} errors={errors} />}

                <Button id="submit" type="submit" disabled={!isValid}>Join now</Button>
                {response && <p style={{ color: primary }}>{response}</p>}
            </form>

        </div>
    )
}