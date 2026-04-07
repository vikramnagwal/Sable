"use client";
import { z } from "zod";
import { useForm } from "react-hook-form"

type SignUpSchema = z.infer<typeof signUpSchema>

const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100)
});

export function SignUp() {
    const { register, handleSubmit } = useForm<SignUpSchema>();
    return (
        <div>
            <div></div>
            <div>
                <form ></form>
            </div>
        </div>
    )
}