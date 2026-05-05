import { signInWithGithub } from "@/lib/actions/sso";
import { Button } from "../../button";
import { Github } from "@/packages/icons/github";


export default function SignInGithub() {
  return (
    <form action={signInWithGithub}>
      <Button label="Sign In with Github" type="submit" icon={<Github />} />
    </form>
  );
}
