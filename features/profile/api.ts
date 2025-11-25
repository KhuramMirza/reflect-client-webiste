import { getAuthToken } from "@/features/auth/token";
import { fetchApi } from "@/lib/fetcher";

export async function fetchUserDetails() {
  const token = await getAuthToken();
  return await fetchApi(`/users/getMe`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateUserPassword(details: object) {
  const token = await getAuthToken();
  return await fetchApi(`/users/updateMyPassword`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  });
}

export async function updateUserInfo(data: object, profileImage = false) {
  const token = await getAuthToken();
  if (profileImage) {
    const finalFormData = new FormData();

    Object.keys(data).forEach((key) => {
      const value = data[key];

      if (key === "profileImage") {
        // Directly append the File object
        finalFormData.append(key, value);
      } else if (Array.isArray(value)) {
        // For arrays, append each item with the same key
        value.forEach((item) => finalFormData.append(key, item));
      } else {
        // Append all other simple values (strings, numbers)
        finalFormData.append(key, value);
      }
    });

    return await fetchApi(
      `/users/updateMe`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: finalFormData,
      },
      true,
    );
  }

  return await fetchApi(`/users/updateMe`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}
