import { Google } from "@/packages/icons/google";
import { signIn } from "@/lib/auth";
import { Button } from "../../button";

export default function SignInGoogle() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google");
			}}
		>
			<Button type="submit" label="Register with Google" icon={<Google />} />
		</form>
	);
}
