"use client";

import OauthOption from "@/components/oauth-option";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPasword = () => {
    setShowPassword((prev) => !prev);
  };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <div className="bg-slate-50 px-6 py-8 rounded-lg">
      <div className="mb-6">
        <h2 className="font-bold text-2xl">Login</h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={`${showPassword ? "text" : "password"}`}
                      className="pr-10"
                    />
                    {!showPassword ? (
                      <EyeIcon
                        className="absolute right-3 top-2 size-5 cursor-pointer"
                        onClick={toggleShowPasword}
                      />
                    ) : (
                      <EyeOffIcon
                        className="absolute right-3 top-2 size-5 cursor-pointer"
                        onClick={toggleShowPasword}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full">Login </Button>
        </form>
      </Form>

      <OauthOption />

      <div className="mt-8 flex flex-col gap-1.5">
        <Link
          href="/"
          className="text-xs hover:underline text-gray-500 hover:text-gray-800 transition-all"
        >
          Forgot your password?
        </Link>
        <Link
          href="/register"
          className="text-xs hover:underline text-gray-500 hover:text-gray-800 transition-all"
        >
          Don&apos;t have account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Page;
