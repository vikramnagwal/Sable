"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../button";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 w-full"
      >
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="JohnDoe@example.com"
          className="px-4 py-3 bg-white/20 rounded-full w-full md:w-120 mx-3"
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
        <input
          {...register("password", { required: true })}
          type={"password"}
          placeholder="Password"
          className="px-4 py-3 bg-white/20 rounded-full w-full md:w-120 mx-3"
        />
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}

        <Button type="submit" label="Sign In" className="w-full" />
      </form>
    </div>
  );
}
