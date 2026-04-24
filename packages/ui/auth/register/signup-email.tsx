"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { useRegisterContext } from "./context";
import { createUserAction } from "@/lib/actions/create-user-action";

const emailSignupSchema = z.object({
	email: z.email("Invalid email address"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters long")
		.max(100, "Calm down, you don't need a password that long!"),
});

export type EmailSignupData = z.infer<typeof emailSignupSchema>;

export function SignupEmail() {
	const { setEmail, setPassword, setSteps } = useRegisterContext();
	const {
		register,
		getValues,
		formState: { errors },
	} = useForm<EmailSignupData>();

	const { executeAsync, isPending } = useAction(createUserAction, {
		onSuccess: () => {
			toast
		}
	});
	return (
		<div>
			<form></form>
		</div>
	);
}
