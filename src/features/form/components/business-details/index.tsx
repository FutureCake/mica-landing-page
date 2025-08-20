
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { SignUpData } from "../..";
import { TextInput } from "../../../../shared/components/text-input";
import "./styles.scss";

type BusinessDetailsSectionProps = {
    register: UseFormRegister<SignUpData>;
    errors: FieldErrors<SignUpData>;
};

export function BusinessDetailsSection(props: BusinessDetailsSectionProps) {

    const { register, errors } = props;

    return (
        <section id="extended-user-form">
            <TextInput
                autoComplete="organization"
                placeholder="Business name"
                error={errors.businessName?.message}
                {...register("businessName", {
                    required: "Business name is required",
                })} />
            <TextInput placeholder="Website, instagram etc.." {...register("businessWebsite")} />
            <TextInput autoComplete="address-level1" placeholder="Business address" {...register("businessAddress")} />
        </section>
    );
}