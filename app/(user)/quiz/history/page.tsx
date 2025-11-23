import { fetchRecentlyGeneratedQuizzes } from "@/features/dashboard/api";
import { SimpleQuizData } from "@/features/dashboard/types";
import RecentlyGeneratedQuizCard from "@/features/dashboard/components/RecentlyGeneratedQuizCard";
import Link from "next/link";
import {
  ArrowLeft,
  History,
  LayoutGrid,
  BrainCircuit,
  Files,
  SearchX,
} from "lucide-react";

export default async function HistoryPage() {
  const { quizzes } = await fetchRecentlyGeneratedQuizzes();

  const allQuizzes = quizzes || [];

  const totalQuizzes = allQuizzes.length;
  const totalQuestions = allQuizzes.reduce(
    (acc, curr) => acc + curr.questionsCount,
    0,
  );

  const simpleQuizzes = allQuizzes.map((quiz) => ({
    id: quiz._id,
    quizTopic: quiz.quizTopic,
    difficulty: quiz.difficulty,
    questionsCount: quiz.questionsCount,
  }));

  return (
    <div className="min-h-screen w-full space-y-8 px-4 py-8 md:px-8">
      {/* 1. Header & Navigation */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <Link
            href="/dashboard"
            className="group text-primary-300 hover:text-primary-600 mb-2 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </Link>
          <h1 className="mt-4 flex items-center gap-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            <History className="text-primary-400 h-8 w-8 md:h-10 md:w-10" />
            Quiz History
          </h1>
          <p className="text-primary-200 max-w-lg">
            A complete archive of your learning journey. Review past attempts,
            check your scores, and retake challenges.
          </p>
        </div>
      </div>

      {/* 2. Stats Overview (Fills empty space and looks premium) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Stat Card 1 */}
        <div className="border-primary-300/20 bg-primary-500/10 rounded-2xl border p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
              <Files className="h-6 w-6" />
            </div>
            <div>
              <p className="text-primary-200 text-sm font-medium">
                Total Quizzes
              </p>
              <h4 className="text-primary-200 text-2xl font-bold">
                {totalQuizzes}
              </h4>
            </div>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="border-primary-300/20 bg-primary-500/10 rounded-2xl border p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div>
              <p className="text-primary-200 text-sm font-medium">
                Total Questions
              </p>
              <h4 className="text-2xl font-bold text-blue-300">
                {totalQuestions}
              </h4>
            </div>
          </div>
        </div>

        {/* Stat Card 3 (Visual Filler) */}
        <div className="border-primary-300/20 bg-primary-500/10 rounded-2xl border p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
              <LayoutGrid className="h-6 w-6" />
            </div>
            <div>
              <p className="text-primary-200 text-sm font-medium">
                Library Status
              </p>
              <h4 className="text-lg font-bold text-emerald-300">Active</h4>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Grid */}
      <div className="relative min-h-[400px]">
        {simpleQuizzes.length > 0 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 grid grid-cols-1 gap-6 duration-700 md:grid-cols-2 lg:grid-cols-3">
            {simpleQuizzes.map((quiz: SimpleQuizData) => (
              <RecentlyGeneratedQuizCard
                key={quiz.id}
                id={quiz.id}
                quizTopic={quiz.quizTopic}
                difficulty={quiz.difficulty}
                questionsCount={quiz.questionsCount}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-primary-500/10 mb-4 rounded-full p-6">
              <SearchX className="text-primary-300 h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              No history found
            </h3>
            <p className="text-primary-200 mt-2 max-w-sm">
              You haven&#39;t generated any quizzes yet. Go back to the
              dashboard to start learning.
            </p>
          </div>
        )}
      </div>

      {/* Decorative Background Blob */}
      <div className="bg-primary-600/20 fixed top-20 right-0 -z-10 h-[500px] w-[500px] rounded-full opacity-30 blur-[100px]" />
      <div className="fixed bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 opacity-30 blur-[100px]" />
    </div>
  );
}
