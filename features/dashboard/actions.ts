"use server";

import { getAuthToken } from "@/features/auth/token";
import { generateQuiz } from "@/features/dashboard/api";
import { QuizGenerationResult } from "@/features/dashboard/types";

export async function generateQuizAction(formData: FormData) {
  const token = getAuthToken();

  const topic = formData.get("topic") as string;
  const description = formData.get("description") as string;
  const difficulty = formData.get("difficulty") as string;

  const questionsCount = Number.parseInt(
    formData.get("questionsCount") as string,
    10,
  );

  const quizData = {
    topic,
    description,
    difficulty,
    questionsCount,
  };

  const response: QuizGenerationResult = await generateQuiz(
    await token,
    quizData,
  );

  return response;
}
