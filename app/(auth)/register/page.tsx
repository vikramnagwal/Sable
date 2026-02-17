import SignIn from "@/components/ui/auth/sign-in";
import SignInGithub from "@/components/ui/auth/sign-in-github";
import SignInGoogle from "@/components/ui/auth/sign-in-google";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center p-3 md:p-8">
      <div className="flex flex-col gap-5 items-center mt-32 w-full max-w-md">
        <SignIn />
        <span>or</span>
        <div className="flex flex-col md:flex-row items-center gap-2 w-full">
          <SignInGoogle />
          <SignInGithub />
        </div>
      </div>
    </div>
  );
}
