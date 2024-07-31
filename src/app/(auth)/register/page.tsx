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
import { useToast } from "@/components/ui/use-toast";
import { API_REQUEST } from "@/constants/fetch-request";
import { RegisterResponse, registerSchema } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPasword = () => {
    setShowPassword((prev) => !prev);
  };

  const { mutate: register, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (values: z.infer<typeof registerSchema>) => {
      try {
        if (values.password !== values.confirmPassword) {
          throw new Error("Passwords do not match");
        }

        const res = await fetch(`${API_REQUEST}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          credentials: "include",
        });

        const data: RegisterResponse = await res.json();

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        return data;
      } catch (err) {
        throw err;
      }
    },
    onSuccess: (data) => {
      console.log(data);
      toast({
        title: "Success",
        description: "Account created successfully",
        variant: "success",
      });
      router.push("/");
    },
    onError: (error) => {
      console.error(error);
      toast({
        title: "Error",
        description: error.message ?? "An error occurred",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    register(values);
  };

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="bg-slate-50 px-6 py-8 rounded-lg">
      <div className="mb-6">
        <h2 className="font-bold text-2xl">Create an account</h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
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

          <Button className="w-full" type="submit">
            Create account
          </Button>
        </form>
      </Form>

      <OauthOption />

      <div className="mt-8">
        <Link
          href="/login"
          className="text-xs hover:underline text-gray-500 hover:text-gray-800 transition-all"
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default Page;
