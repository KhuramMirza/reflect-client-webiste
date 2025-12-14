"use server";

import { getAuthToken } from "@/features/auth/token";
import {
  generateQuiz,
  generateQuizByTopic,
  generateQuizFromFile,
  submitQuiz,
} from "@/features/dashboard/api";
import { QuizGenerationResult } from "@/features/dashboard/types";
import { revalidatePath } from "next/cache";

export async function generateQuizAction(formData: FormData) {
  const token = getAuthToken();

  try {
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

    return { success: true, message: "Quiz generated successfully" };
  } catch (error) {
    return {
      success: false,
      message: "There was an error while generating Quiz. Please try again!",
    };
  }
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
  try {
    const file = formData.get("file");

    revalidatePath("/dashboard");

    await generateQuizFromFile(file);
    return { success: true, message: "Quiz generated successfully" };
  } catch (error) {
    return {
      success: false,
      message: "There was an error while generating Quiz. Please try again!",
    };
  }
}

export async function generateTopicQuizAction(
  topicId: string,
  topicTitle: string,
  topicDescription: string,
) {
  const token = await getAuthToken();

  console.log(topicId);
  try {
    // 1. Construct the payload
    const quizData = {
      topic: topicTitle,
      description: topicDescription, // Pass the context so AI generates relevant questions
      difficulty: "medium", // Default for roadmap modules
      questionsCount: 5,
    };

    // 2. Call your existing API function
    // Assuming generateQuiz returns the full backend response
    const response = await generateQuizByTopic(token, quizData, topicId);
    const newQuiz = response?.data;

    // 3. Revalidate so it shows up in "Recent Quizzes"
    revalidatePath("/dashboard");
    revalidatePath(`/roadmap/[roadmapId]/[checkpointId]`); // Refresh the current page logic if needed

    // 4. Return the ID for the client to redirect
    // Adjust 'response.data._id' based on exactly how your backend returns the ID

    // return { success: true, message: "Quiz generated successfully" };
    return {
      success: true,
      quiz: {
        id: newQuiz._id,
        quizTopic: newQuiz.quizTopic || newQuiz.topic, // Handle potential naming differences
        difficulty: newQuiz.difficulty,
        questionsCount: newQuiz.questionsCount,
      },
    };
  } catch (error) {
    console.error("Quiz Generation Error:", error);
    return { success: false, message: "Failed to generate quiz." };
  }
}
