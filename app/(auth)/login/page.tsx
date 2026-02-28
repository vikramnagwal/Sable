import FooterLogo from "@/components/shared/logoFooter";
import { AuthSeparator } from "@/components/ui/auth/auth-separator";
import SignIn from "@/components/ui/auth/sign-in";
import SignInGithub from "@/components/ui/auth/sign-in-github";
import SignInGoogle from "@/components/ui/auth/sign-in-google";
import { siteName } from "@/lib/constant";


export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center p-3 md:p-8">
      <div className="flex flex-col gap-5 items-center mt-3 md:mt-6 w-full max-w-md">
          <h2 className="font-semibold text-2xl sm:p-2 my-2">Welcome back to {siteName}</h2>
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
