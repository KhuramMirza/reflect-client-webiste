"use client";

import { useState } from "react";
import { QuizDoc, QuizGenerationResult } from "@/features/dashboard/types";
import { submitQuizAction } from "@/features/dashboard/actions";
import { CheckCircle2, Circle } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function QuizForm({ quiz }: Readonly<{ quiz: QuizDoc }>) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleFormAction(formData: FormData) {
    setIsSubmitting(true);
    const result: QuizGenerationResult = await submitQuizAction(formData);
    setIsSubmitting(false);
    if (result?.status === "success") {
      toast.success("Quiz submitted successfully");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }
  }

  return (
    <div className="animate-in fade-in from-primary-100 to-accent-100 flex min-h-screen items-center justify-center bg-gradient-to-br px-4 py-12 duration-500 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-8 rounded-2xl bg-white/80 p-8 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg sm:p-10">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="animate-in slide-in-from-top from-primary-300 to-primary-400 bg-gradient-to-r bg-clip-text text-3xl font-extrabold text-transparent delay-100 duration-700 sm:text-4xl">
            {quiz.quizTopic}
          </h1>
          <p className="animate-in slide-in-from-top text-sm text-gray-500 delay-200 duration-700 sm:text-base">
            Answer all questions to complete the quiz.
          </p>
        </div>

        <form action={handleFormAction} className="mt-8 space-y-8">
          {/* Hidden Input to pass Quiz ID */}
          <input type="hidden" name="quizId" value={quiz._id} />

          {quiz.questions.map((q, index) => (
            <div
              key={q._id}
              className="animate-in slide-in-from-bottom rounded-xl border border-gray-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h2 className="mb-4 flex items-start text-lg font-semibold text-gray-800 sm:text-xl">
                <span className="bg-primary-200 mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-gray-50">
                  Q{index + 1}
                </span>
                {q.questionText}
              </h2>

              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                {q.options.map((option, optionIndex) => {
                  const optionId = `${q._id}-option-${optionIndex}`;
                  return (
                    <div key={option} className="relative">
                      <input
                        type="radio"
                        id={optionId}
                        name={q._id} // Grouping by Question ID
                        value={option}
                        required // Forces user to select an answer
                        className="peer sr-only" // Hide default radio button
                      />
                      <label
                        htmlFor={optionId}
                        className="group peer-checked:border-primary-500 flex cursor-pointer items-center rounded-xl border-2 border-transparent bg-gray-50 p-4 transition-all duration-200 peer-checked:bg-blue-50/50 peer-checked:shadow-sm hover:bg-blue-50"
                      >
                        <div className="flex flex-1 items-center">
                          {/* Custom Radio Icon */}
                          <div className="mr-3">
                            <Circle className="group-hover:text-primary-600 h-5 w-5 text-gray-400 transition-colors peer-checked:hidden" />
                            <CheckCircle2 className="text-primary-600 hidden h-5 w-5 scale-0 transition-transform duration-200 ease-out peer-checked:block peer-checked:scale-100" />
                          </div>
                          <span className="peer-checked:text-primary-200 font-medium text-gray-700 transition-colors">
                            {option}
                          </span>
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="animate-in slide-in-from-bottom pt-6 delay-500 duration-700">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group from-primary-400 to-accent-400 hover:from-primary-500 hover:to-accent-500 relative flex w-full cursor-pointer justify-center rounded-xl border border-transparent bg-gradient-to-r px-6 py-3.5 font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {isSubmitting ? (
                  <svg
                    className="h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <CheckCircle2
                    className="h-5 w-5 text-blue-200 transition-colors group-hover:text-blue-100"
                    aria-hidden="true"
                  />
                )}
              </span>
              {isSubmitting ? "Submitting..." : "Submit Quiz"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
