import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z
    .string()
    .min(8, "Password confirm must be at least 8 characters"),
});

export interface RegisterResponse {
  status: "success" | "fail" | "error";
  token: string;
  message?: string;
  data?: {
    user: {
      name: string;
      email: string;
      emailVerified: boolean | null;
      image: string | null;
      _id: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  };
}

export const loginSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
