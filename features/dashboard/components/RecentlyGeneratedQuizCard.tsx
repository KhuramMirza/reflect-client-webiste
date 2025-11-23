import { SimpleQuizData } from "@/features/dashboard/types";
import { getQuizAttempt } from "@/features/dashboard/api";
import QuizCardClient from "./QuizCardClient"; // Import the client component

export default async function RecentlyGeneratedQuizCard({
  id,
  quizTopic,
  difficulty,
  questionsCount,
}: Readonly<SimpleQuizData>) {
  const { data } = await getQuizAttempt(id);

  const attemptData = data?.attempt || null;

  return (
    <QuizCardClient
      id={id}
      quizTopic={quizTopic}
      difficulty={difficulty}
      questionsCount={questionsCount}
      attempt={attemptData}
    />
  );
}
