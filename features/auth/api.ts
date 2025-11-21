import { fetchApi } from "@/lib/fetcher";
import { Login, Signup } from "@/features/auth/types";

export async function loginUser(credentials: Login) {
  return await fetchApi("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}

export async function signupUser(details: Signup) {
  return await fetchApi("/auth/signup", {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}
