import { Github } from "@/components/icons/github";
import { signIn } from "@/lib/auth";
import { Button } from "../button";

export default function SignInGithub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" label="Register with Github" icon={<Github />}/>
    </form>
  );
}
