import type { AxiosResponse } from "axios";
import { useState } from "react";
import type { SignUpData } from "..";
import { API, type APIResponse } from "../../../shared/api/api";

export default function useSignup() {

    const [response, setResponse] = useState<string>();

    const onSubmit = (data: SignUpData): void => {
        API.post("/early-access", data)
            .then((response: AxiosResponse<APIResponse>) => {
                setResponse(response.data.message);
            })
            .catch(() => {
                setResponse("Failed to sign up.. Please try again later.");
            });
    };

    return {
        onSubmit,
        response
    }
}