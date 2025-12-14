import { fetchQuiz } from "@/features/dashboard/api";
import QuizForm from "@/features/dashboard/components/QuizForm";

interface PageProps {
  params: {
    quizId: string;
  };
}

export default async function QuizPage({ params }: Readonly<PageProps>) {
  const { quizId } = await params;

  const response = await fetchQuiz(quizId);
  const quizDoc = response.data.doc;

  return (
    <div className="min-h-screen bg-gray-100">
      <QuizForm quiz={quizDoc} />
    </div>
  );
}
