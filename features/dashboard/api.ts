import { fetchApi } from "@/lib/fetcher";
import { GenerateQuiz } from "@/features/dashboard/types";

export async function generateQuiz(token: string, body: GenerateQuiz) {
  return await fetchApi(`/quiz/generate-simple`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}
