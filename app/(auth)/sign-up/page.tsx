import { RegisterProvider } from "@/packages/ui/auth/register/context";
import { SignUp } from "./page-client";

export default function RegisterPage() {
    return (
      <RegisterProvider>
        <SignUp />
      </RegisterProvider>
    );
}