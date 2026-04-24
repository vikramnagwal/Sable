import FooterLogo from "@/packages/shared/logoFooter";
import { AuthSeparator } from "@/packages/ui/auth/auth-separator";
import SignIn from "@/packages/ui/auth/login/login-form";
import SignInGithub from "@/packages/ui/auth/login/github-button";
import SignInGoogle from "@/packages/ui/auth/login/google-button";
import { siteName } from "@/lib/constant";

export default function LoginPage() {
	return (
		<div className="flex items-center justify-center p-3 md:p-8">
			<div className="flex-1 sm:block  hidden">
				<h1 className="text-4xl font-bold mb-2">{siteName}</h1>
				<p className="text-lg text-muted-foreground">
					Welcome back! Please sign in to your account.
				</p>
			</div>
			<div className="flex flex-col gap-5 items-center mt-3 md:mt-6 w-full max-w-md">
				<SignIn />
				<AuthSeparator />
				<div className="flex flex-col md:flex-row md:justify-center items-center gap-2 w-full mx-auto">
					<SignInGoogle />
					<SignInGithub />
				</div>
				<FooterLogo />
			</div>
		</div>
	);
}
