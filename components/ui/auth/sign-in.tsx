"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../button";
import Input from "../input";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full p-2 flex flex-col justify-between">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 w-full"
      >
        <Input
          {...register("email", { required: true })}
          placeholder="JohnDoe@gmail.com"
          type="email"
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
        <Input
          {...register("password", { required: true })}
          type={"password"}
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}

        <Button type="submit" label="Sign In" className="w-full" />
        <p className="text-center mt-2 text-sm opacity-80 text-gray-300">
          By continuing, you agree to our{" "}
          <span className="underline underline-offset-2">Terms of Service</span>{" "}
          and
          <span className="underline underline-offset-2">Privacy Policy.</span>
        </p>
        <p className="text-sm opacity-80">Don&apos;t have an account? 
          <a href="/register" className="underline underline-offset-2 cursor-pointer hover:text-white"> Signup</a>
        </p>
      </form>
    </div>
  );
}
 