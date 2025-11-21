export async function fetchApi(endpoint, options = {}, isMultipart = false) {
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = `${API_URL}${endpoint}`;

  let defaultOptions;
  if (isMultipart) {
    defaultOptions = {
      headers: {},
    };
  } else {
    defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  // const response = await fetch(url, { ...defaultOptions, ...options });
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  });

  let responseData;

  try {
    responseData = await response.json();
  } catch {
    responseData = { message: "Invalid JSON response from server" };
  }

  if (!response.ok) {
    const error = new Error(
      responseData.message || `API call failed with status ${response.status}`,
    );
    error.status = response.status;
    console.log("Error", error);
    throw error;
  }

  if (response.status === 204) {
    return null;
  }

  return responseData;
}
