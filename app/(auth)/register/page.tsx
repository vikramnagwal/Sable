import FooterLogo from "@/components/shared/logoFooter";
import { AuthSeparator } from "@/components/ui/auth/auth-separator";
import SignIn from "@/components/ui/auth/sign-in";
import SignInGithub from "@/components/ui/auth/sign-in-github";
import SignInGoogle from "@/components/ui/auth/sign-in-google";


export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center p-3 md:p-8">
      <div className="flex flex-col gap-5 items-center mt-8 w-full max-w-md">
        <div className="flex flex-col items-center p-2 mb-3">
          <h2 className="font-semibold text-xl md:text-4xl p-2">Sign up</h2>
          <p className="leading-8">Create an account to get started</p>
        </div>
        <SignIn />
        <AuthSeparator />
        <div className="flex flex-col md:flex-row items-center gap-2 w-full">
          <SignInGoogle />
          <SignInGithub />
        </div>
        <FooterLogo />
      </div>
    </div>
  );
}
