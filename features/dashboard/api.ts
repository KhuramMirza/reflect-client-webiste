import { fetchApi } from "@/lib/fetcher";
import { GenerateQuiz } from "@/features/dashboard/types";
import { getAuthToken } from "@/features/auth/token";

export async function generateQuiz(token: string, body: GenerateQuiz) {
  return await fetchApi(`/quiz/generate-simple`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}

export async function generateQuizFromFile(file) {
  const token = await getAuthToken();

  // 1. Create a FormData object
  const formData = new FormData();

  // 2. Append the file with the key 'file' (This matches what the backend expects)
  formData.append("file", file);

  return await fetchApi(
    `/quiz/generate-from-file`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // 3. Send the FormData, not the raw file
      body: formData,
    },
    true, // isMultipart
  );
}

export async function fetchRecentlyGeneratedQuizzes() {
  const token = await getAuthToken();
  return await fetchApi(`/quiz/get-recently-generated`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function fetchQuiz(id: string) {
  const token = await getAuthToken();
  return await fetchApi(`/quiz/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function submitQuiz(id: string, submittedAnswers: string[]) {
  const token = await getAuthToken();
  return await fetchApi(`/quiz/${id}/submit`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(submittedAnswers),
  });
}

export async function getQuizAttempt(quizId: string) {
  const token = await getAuthToken();
  return await fetchApi(`/quiz/attempt/${quizId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
