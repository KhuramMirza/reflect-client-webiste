"use client";

import { Sparkles, Upload } from "lucide-react"; // Added Upload icon
import React, { useState } from "react";
import QuizGenerationModal from "@/features/dashboard/components/QuizGenerationModal";
import PdfUploadModal from "@/features/dashboard/components/PdfUploadModal";

export default function QuizzesSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false); // New state

  return (
    <div>
      <div className="mx-auto mt-20 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-primary-400 mt-4 flex text-4xl font-bold">
            Quizzes
          </h2>

          {/* Grouped buttons together */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="bg-card text-card-foreground hover:bg-secondary border-border flex cursor-pointer items-center gap-2 rounded-2xl border px-6 py-3 font-medium transition-colors"
            >
              <Upload className="h-4 w-4" />
              Upload PDF
            </button>

            <button
              onClick={() => setIsQuizModalOpen(true)}
              className="bg-primary-500 hover:bg-primary-600 flex cursor-pointer items-center gap-2 rounded-2xl px-6 py-3 font-medium text-white shadow-md transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              Generate Quiz
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>

      {/* Quiz Modal */}
      <QuizGenerationModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />

      {/* PDF Modal */}
      <PdfUploadModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}
