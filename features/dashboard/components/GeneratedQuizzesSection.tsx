import { fetchRecentlyGeneratedQuizzes } from "@/features/dashboard/api";
import { SimpleQuizData } from "@/features/dashboard/types";
import RecentlyGeneratedQuizCard from "@/features/dashboard/components/RecentlyGeneratedQuizCard";
import Link from "next/link";
import { Sparkles, FolderOpen } from "lucide-react";

export default async function GeneratedQuizzesSection() {
  const { quizzes } = await fetchRecentlyGeneratedQuizzes();

  // 1. Sort by date (if API doesn't already) and 2. Slice top 10
  const recentQuizzes = quizzes ? quizzes.slice(0, 10) : [];

  const simpleQuizzes = recentQuizzes.map((quiz) => ({
    id: quiz._id,
    quizTopic: quiz.quizTopic,
    difficulty: quiz.difficulty,
    questionsCount: quiz.questionsCount,
  }));

  return (
    <div className="mt-2 mb-10 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
          <Sparkles className="text-primary-200 h-5 w-5" />
          Recently Generated
        </h2>
        {simpleQuizzes.length > 0 && (
          <Link
            href="/quiz/history"
            className="text-primary-200 hover:text-primary-600 text-sm hover:underline"
          >
            View all
          </Link>
        )}
      </div>

      {simpleQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {simpleQuizzes.map((quiz: SimpleQuizData) => (
            <RecentlyGeneratedQuizCard
              id={quiz.id}
              quizTopic={quiz.quizTopic}
              difficulty={quiz.difficulty}
              questionsCount={quiz.questionsCount}
              key={quiz.id}
            />
          ))}
        </div>
      ) : (
        // Empty State with Animation
        <div className="border-primary-300/30 bg-primary-500/5 animate-in fade-in zoom-in flex flex-col items-center justify-center rounded-3xl border-2 border-dashed py-20 text-center duration-500">
          <div className="bg-primary-500/20 shadow-primary-500/10 mb-4 flex h-20 w-20 items-center justify-center rounded-full shadow-lg">
            <FolderOpen className="text-primary-200 h-10 w-10" />
          </div>
          <h3 className="text-xl font-semibold text-white">No quizzes yet!</h3>
          <p className="text-primary-200 mb-6 max-w-sm text-sm">
            You haven&#39;t generated any quizzes yet. Create one now to
            challenge yourself.
          </p>
          <p className="group text-primary-600 hover:bg-primary-50 hover:shadow-primary-500/20 relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold transition-all hover:scale-105 hover:shadow-lg">
            <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Generate Quiz First
          </p>
        </div>
      )}
    </div>
  );
}
