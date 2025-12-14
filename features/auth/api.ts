import { fetchApi } from "@/lib/fetcher";
import { Login, Signup } from "@/features/auth/types";
import { cookies } from "next/headers";

export async function loginUser(credentials: Login) {
  try {
    const response = await fetchApi("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return { response, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
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

export async function checkUserStatus(token: string) {
  if (!token) return null;

  const response = await fetchApi("/users/getMe", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.doc || null;
}

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value as string;
  return await checkUserStatus(token);
}
