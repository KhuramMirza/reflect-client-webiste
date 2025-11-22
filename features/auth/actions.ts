"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { loginUser, signupUser } from "@/features/auth/api";
import { Login, Signup } from "@/features/auth/types";

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

export async function signupAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;

  const signupData: Signup = {
    name,
    email,
    password,
    passwordConfirm,
  };

  const response = await signupUser(signupData);

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

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("jwt");
  redirect("/");
}
