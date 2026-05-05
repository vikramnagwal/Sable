import { signInWithGoogle } from "@/lib/actions/sso";
import { Button } from "../../button";
import { Google } from "@/packages/icons/google";

export default function SignInGoogle() {
  return (
    <form action={signInWithGoogle}>
      <Button label="Sign In with Google" type="submit" icon={<Google />} />
    </form>
  );
}
