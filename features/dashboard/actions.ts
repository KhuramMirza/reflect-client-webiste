"use server";

import { getAuthToken } from "@/features/auth/token";
import {
  generateQuiz,
  generateQuizFromFile,
  submitQuiz,
} from "@/features/dashboard/api";
import { QuizGenerationResult } from "@/features/dashboard/types";
import { revalidatePath } from "next/cache";

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

  revalidatePath("/dashboard");

  return response;
}

export async function submitQuizAction(formData: FormData) {
  const submittedAnswers: string[] = [];
  const quizId = formData.get("quizId") as string;

  for (const [key, value] of formData.entries()) {
    if (key === "quizId") continue;
    submittedAnswers.push(value.toString());
  }

  return await submitQuiz(quizId, submittedAnswers);
}

export async function generateQuizByFileAction(formData: FormData) {
  const file = formData.get("file");

  revalidatePath("/dashboard");

  return await generateQuizFromFile(file);
}
