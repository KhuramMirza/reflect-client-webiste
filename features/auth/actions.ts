"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { loginUser } from "@/features/auth/api";
import { Login } from "@/features/auth/types";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const loginData: Login = {
    email,
    password,
  };

  const response = await loginUser(loginData);

  if (response?.token) {
    const cookieStore = await cookies();
    cookieStore.set("jwt", response.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    });

    redirect("/dashboard");
  }
}
