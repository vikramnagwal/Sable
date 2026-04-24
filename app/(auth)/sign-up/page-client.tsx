"use client";

import {
	RegisterProvider,
	useRegisterContext,
} from "@/packages/ui/auth/register/context";
import { SignupEmail } from "@/packages/ui/auth/register/signup-email";


export default function RegisterPageClient() {
	return (
		<RegisterProvider>
			<RegisterPageFlow />
		</RegisterProvider>
	);
}

// Register
export function SignUp() {
	return (
		<div>
			<h1 className="text-4xl font-bold mb-2">Create an account</h1>
			<p className="text-lg text-muted-foreground">
				Join us today! Create your account to get started.
			</p>
			<SignupEmail />
		</div>
	);
}

// verification
export function VerifyEmail() {}

function RegisterPageFlow() {
	const { steps } = useRegisterContext();

	switch (steps) {
		case "signup":
			<SignupEmail />;
			break;

		default:
			return <SignupEmail />;
			break;
	}
}
