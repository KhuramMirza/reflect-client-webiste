import { fetchApi } from "@/lib/fetcher";
import { Login } from "@/features/auth/types";

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
