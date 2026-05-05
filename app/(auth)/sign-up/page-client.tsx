"use client";

import { siteName } from "@/lib/constant";
import { AuthSeparator } from "@/packages/ui/auth/auth-separator";
import SignInGithub from "@/packages/ui/auth/login/github-button";
import SignInGoogle from "@/packages/ui/auth/login/google-button";
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
    <div className="flex items-center justify-between p-3 md:p-8">
      <div className="flex-1 items-end sm:block hidden">
        <p className="text-3xl font-semibold my-2">Create an account</p>
        <p className="text-lg text-muted-foreground">
          Join us today! Create your account to get started.
        </p>
      </div>

      <div className="flex flex-col mt-3 md:mt-6 w-full max-w-md">
        <SignupEmail />

        <div className="text-center flex flex-col items-center gap-4">
          <p className="text-center mt-2 text-sm opacity-80 text-gray-300">
            By continuing, you agree to our{" "}
            <span className="underline underline-offset-2">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-2">
              Privacy Policy.
            </span>
          </p>

          <p className="text-sm opacity-80">
            Already have an account?
            <a
              href="/login"
              className="underline underline-offset-2 cursor-pointer hover:text-white"
            >
              {"  "}
              Signin
            </a>
          </p>
        </div>
		<AuthSeparator />
		<div className="flex items-center gap-6 mx-auto">
			<SignInGithub />
			<SignInGoogle />
		</div>
      </div>
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
		
		case "verify":
			<VerifyEmail />

		default:
			return <SignupEmail />;
	}
}
