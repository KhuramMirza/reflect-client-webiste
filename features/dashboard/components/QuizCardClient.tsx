"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart2, CheckCircle2, Circle, Hash, Trophy, X } from "lucide-react";
import { SimpleQuizData } from "@/features/dashboard/types";

// Define the interface for the attempt data based on your JSON
interface AttemptData {
  userScore: number;
  totalScore: number;
  submittedAnswers: string[];
  correctAnswers: string[];
}

interface Props extends SimpleQuizData {
  attempt: AttemptData | null;
}

export default function QuizCardClient({
  id,
  quizTopic,
  difficulty,
  questionsCount,
  attempt,
}: Readonly<Props>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAttempted = !!attempt;
  const userScore = attempt ? attempt.userScore : 0;
  const totalScore = attempt ? attempt.totalScore : questionsCount;

  // Common card styling variable to keep code DRY
  const cardClass =
    "group border-primary-300/30 bg-primary-500/10 hover:bg-primary-500/20 hover:shadow-primary-500/10 relative flex w-full flex-col gap-4 overflow-hidden rounded-xl border p-5 text-gray-50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-center md:justify-between cursor-pointer";

  const CardContent = () => (
    <>
      {/* Left Side: Status Icon & Title */}
      <div className="flex items-center gap-4">
        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
          {isAttempted ? (
            <CheckCircle2 className="h-8 w-8 text-green-400" />
          ) : (
            <Circle className="text-primary-200/50 h-8 w-8" />
          )}
        </div>

        <div>
          <h3 className="text-accent-400 text-lg font-semibold tracking-tight">
            {quizTopic}
          </h3>
          <p className="text-primary-900 text-xs font-medium opacity-70">
            {isAttempted ? "Completed" : "Pending Attempt"}
          </p>
        </div>
      </div>

      {/* Middle: Metadata Badges */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4">
        <div className="bg-primary-900/30 text-primary-900 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
          <BarChart2 className="h-3.5 w-3.5" />
          {difficulty.toUpperCase()}
        </div>
        <div className="bg-primary-900/30 text-primary-900 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
          <Hash className="h-3.5 w-3.5" />
          {questionsCount} Qs
        </div>
      </div>

      {/* Right Side: Score or Action Call */}
      <div className="border-primary-200/10 mt-2 flex items-center justify-end border-t pt-3 md:mt-0 md:border-0 md:pt-0">
        {isAttempted ? (
          <div className="flex items-center gap-2 text-right">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-300">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-accent-400 text-xs">Score</span>
              <span className="text-primary-900 font-mono text-lg leading-none font-bold tracking-wider">
                {userScore}/{totalScore}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-primary-600 group-hover:bg-primary-50 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold transition-colors">
            Start Quiz
            <span className="block transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        )}
      </div>

      {/* Decorative Background Glow */}
      <div className="bg-primary-300 absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
    </>
  );

  return (
    <>
      {/* CONDITIONAL RENDERING: Link if Pending, Button/Div if Completed */}
      {isAttempted ? (
        <div onClick={() => setIsModalOpen(true)} className={cardClass}>
          <CardContent />
        </div>
      ) : (
        <Link href={`/quiz/${id}`} className={cardClass}>
          <CardContent />
        </Link>
      )}

      {/* POPUP MODAL */}
      {isModalOpen && attempt && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm duration-200">
          <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-slate-900">
            {/* Modal Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-slate-50 p-6 dark:border-gray-700 dark:bg-slate-800/50">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Quiz Results
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {quizTopic} • {difficulty}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
                className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <X className="text-primary-600 h-6 w-6 cursor-pointer" />
              </button>
            </div>

            {/* Score Summary */}
            <div className="shrink-0 border-b border-gray-200 bg-slate-50/50 p-6 text-center dark:border-gray-800 dark:bg-slate-900">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                You Scored
              </span>
              <div className="text-primary-600 dark:text-primary-400 mt-2 text-5xl font-black">
                {userScore}
                <span className="text-2xl font-bold text-gray-400">
                  /{totalScore}
                </span>
              </div>
            </div>

            {/* Scrollable Questions List */}
            <div className="space-y-6 overflow-y-auto p-6">
              {attempt.submittedAnswers.map((userAns, index) => {
                const correctAns = attempt.correctAnswers[index];
                const isCorrect = userAns === correctAns;

                return (
                  <div
                    key={index}
                    className={`rounded-xl border p-4 ${
                      isCorrect
                        ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                        : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-gray-700 dark:text-gray-200">
                        Question {index + 1}
                      </span>
                      <span
                        className={`rounded px-2 py-1 text-xs font-bold ${
                          isCorrect
                            ? "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
                            : "bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200"
                        }`}
                      >
                        {isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                      <div>
                        <span className="mb-1 block text-xs font-bold text-gray-500 uppercase">
                          Your Answer
                        </span>
                        <p
                          className={`font-medium ${
                            isCorrect
                              ? "text-green-700 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {userAns}
                        </p>
                      </div>
                      <div>
                        <span className="mb-1 block text-xs font-bold text-gray-500 uppercase">
                          Correct Answer
                        </span>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          {correctAns}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="flex shrink-0 justify-end border-t border-gray-200 bg-slate-50 p-4 dark:border-gray-700 dark:bg-slate-800/50">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-primary-500 hover:bg-primary-500 cursor-pointer rounded-lg px-6 py-2 font-medium text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
