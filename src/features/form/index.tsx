import { useForm, useWatch } from "react-hook-form";
import { API } from "../../shared/api/api";
import Button from "../../shared/components/button";
import { CheckBox } from "../../shared/components/check-box";
import { TextInput } from "../../shared/components/text-input";
import { BusinessDetailsSection } from "./components/business-details";
import "./styles.scss";

export type SignUpData = {
    email: string;
    businessOwner?: boolean;
    businessName?: string;
    businessWebsite?: string;
    businessAddress?: string;
}

export default function Signup() {

    const { register, handleSubmit, control, formState: { errors, isValid } } = useForm<SignUpData>({
        mode: "onChange",
    });
    const isBusinessOwner = useWatch({ name: "businessOwner", control });

    const onSubmit = (data: SignUpData): void => {
        API.post("/early-access", data);
    };

    return (
        <div id="signup-container">
            <h1>Early access</h1>

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
            </form>

        </div>
    )
}