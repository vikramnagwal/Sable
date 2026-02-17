import { Google } from "@/components/icons/google";
import { signIn } from "@/lib/auth";

export default function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-md font-semibold flex items-center "
      >
        <Google className="mr-2" />
        Register with Google
      </button>
    </form>
  );
}
