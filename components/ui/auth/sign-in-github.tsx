import { Github } from "@/components/icons/github";
import { signIn } from "@/lib/auth";

export default function SignInGithub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-md font-semibold flex items-center "
      >
        <Github className="mr-2" />
        Register with Github
      </button>
    </form>
  );
}
