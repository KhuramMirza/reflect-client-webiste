"use server";

import { revalidatePath } from "next/cache";
import { updateUserInfo, updateUserPassword } from "@/features/profile/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function updateUserInfoAction(prevState: any, formData: FormData) {
  console.log(formData);
  const profileImage = formData.get("profileImage");

  const data = {
    name: formData.get("name") as string,
    bio: formData.get("bio") as string,
    profileImage: formData.get("profileImage"),
  };

  if (profileImage?.size) await updateUserInfo(data, true);

  await updateUserInfo(data);

  revalidatePath("/profile");
}

export async function updateUserPasswordAction(formData: FormData) {
  const currentPassword = formData.get("currentPassword") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;

  const credentials = {
    currentPassword,
    password,
    passwordConfirm,
  };

  await updateUserPassword(credentials);

  const cookieStore = await cookies();
  cookieStore.delete("jwt");
  redirect("/login");
}
