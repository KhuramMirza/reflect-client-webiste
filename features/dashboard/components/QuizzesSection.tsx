"use client";

import { Sparkles } from "lucide-react";
import React, { useState } from "react";
import QuizGenerationModal from "@/features/dashboard/components/QuizGenerationModal";

export default function QuizzesSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  return (
    <div>
      <div className="mx-auto mt-20 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-primary-400 mt-4 flex text-4xl font-bold">
            Quizzes
          </h2>
          <button
            onClick={() => setIsQuizModalOpen(true)}
            className="bg-primary-500 hover:bg-primary-600 flex cursor-pointer items-center gap-2 rounded-2xl px-6 py-3 font-medium text-white shadow-md transition-colors"
          >
            <Sparkles className="h-4 w-4" />
            Generate Quiz
          </button>
        </div>
        <div>{children}</div>
      </div>

      <QuizGenerationModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />
    </div>
  );
}
