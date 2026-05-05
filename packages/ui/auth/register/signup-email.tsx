"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useRegisterContext } from "./context";
import { createUserAction } from "@/lib/actions/create-user-action";
import Input from "../../input";
import { Button } from "../../button";
import { toast } from "sonner";

const emailSignupSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters long"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Calm down, you don't need a password that long!"),
});

export type EmailSignupData = z.infer<typeof emailSignupSchema>;

export function SignupEmail() {
  const { setName, setEmail, setPassword, setSteps } = useRegisterContext();
  if (!setName || !setEmail || !setPassword || !setSteps) {
    throw new Error("SignupEmail must be used within a RegisterProvider");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailSignupData>({
    resolver: zodResolver(emailSignupSchema),
  });

  const { executeAsync, isPending } = useAction(createUserAction, {
    onSuccess: () => {
      toast.success(
        "Email registered successfully! Please check your inbox for the next steps.",
      );
      setSteps("verify");
    },
    onError: ({ error }) => {
      toast.error(
        error.serverError ?? "Something went wrong. Please try again.",
      );
    },
  });

  async function onSubmit(data: EmailSignupData) {
    const fullName = data.firstName + (data.lastName ?? "")

    setName(fullName);
    setEmail(data.email);
    setPassword(data.password);
    await executeAsync(data);
  }

  return (
    <div className="p-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-2 flex flex-col gap-3"
      >
        <div className="flex items-center justify-between gap-2">
        <Input label="First Name" placeholder="John" {...register("firstName")} />
        {errors.firstName?.message && (
          <p className="text-sm text-red-600">{errors.firstName.message}</p>
        )}
        <Input label="Last Name" placeholder="Doe" {...register("lastName")} />
        {errors.lastName?.message && (
          <p className="text-sm text-red-600">{errors.lastName.message}</p>
        )}
        </div>

        <Input
          label="Email"
          placeholder="Johndoe@example.me"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
        <Input
          label="Password"
          type="password"
          placeholder="Whatever.."
          {...register("password")}
        />
        {errors.password?.message && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
        <Button
        className="mt-3"
          type="submit"
          label={isPending ? "Registering..." : "Register"}
          disabled={isPending}
        />
      </form>
    </div>
  );
}
