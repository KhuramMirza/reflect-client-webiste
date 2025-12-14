"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { BookOpen, Bot, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Topic } from "@/features/roadmap/types";
import QuizCardClient from "@/features/dashboard/components/QuizCardClient";
import { generateTopicQuizAction } from "@/features/dashboard/actions";

type QuizSummary = {
  id: string;
  quizTopic: string;
  difficulty: string;
  questionsCount: number;
};

export default function TopicLearningModule({
  topic,
  initialQuiz,
  initialAttempt, // <--- 1. Receive the attempt prop
}: Readonly<{
  topic: Topic;
  initialQuiz?: QuizSummary | null;
  initialAttempt?: any; // Use your Attempt Type here if you have it
}>) {
  const [showChat, setShowChat] = useState(false);

  // Quiz States
  const [generatedQuiz, setGeneratedQuiz] = useState<QuizSummary | null>(
    initialQuiz || null,
  );
  // 2. We don't necessarily need state for attempt, we can pass the prop directly,
  // or store it if you plan to update it dynamically without page reload.

  const [showQuiz, setShowQuiz] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // --- Handlers ---

  const handleGenerateQuiz = async () => {
    // If quiz exists (from props OR just generated), toggle view
    if (generatedQuiz) {
      setShowQuiz(!showQuiz);
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateTopicQuizAction(
        topic._id,
        topic.title,
        topic.description,
      );

      if (result.success && result.quiz) {
        setGeneratedQuiz(result.quiz);
        setShowQuiz(true);
        toast.success("Quiz generated!");
      } else {
        toast.error(result.message || "Failed to generate quiz");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div
      className="scroll-mt-20 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
      id={topic._id}
    >
      <div className="p-6 md:p-8">
        {/* ... Header (Same as before) ... */}
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
          <BookOpen className="text-primary-500 h-6 w-6" />
          {topic.title}
        </h2>

        <div className="prose prose-slate prose-lg max-w-none rounded-xl border border-gray-100 bg-gray-50/50 p-6">
          <ReactMarkdown>{topic.description}</ReactMarkdown>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setShowChat(!showChat)}
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            <Bot className="h-4 w-4" />
            {showChat ? "Hide AI Tutor" : "Ask AI Tutor"}
          </button>

          <button
            onClick={handleGenerateQuiz}
            disabled={isGenerating}
            className={`flex items-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-colors ${
              showQuiz || generatedQuiz
                ? "border-amber-200 bg-amber-100 text-amber-800"
                : "bg-primary-50 text-primary-700 hover:bg-primary-100"
            }`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                {generatedQuiz
                  ? showQuiz
                    ? "Hide Quiz"
                    : initialAttempt
                      ? "View Result"
                      : "View Quiz" // Optional: change text if attempted
                  : "Generate Quiz"}
              </>
            )}
          </button>
        </div>
      </div>

      {showChat && <div className="p-6">Chat Interface...</div>}

      {showQuiz && (
        <div className="animate-in slide-in-from-top-2 border-t border-gray-100 bg-amber-50/30 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-bold text-amber-900">
              <Sparkles className="h-4 w-4 text-amber-600" />
              Topic Assessment
            </h3>
            <button
              onClick={() => setShowQuiz(false)}
              className="text-xs text-amber-700 underline"
            >
              Close
            </button>
          </div>

          <div className="max-w-md">
            {generatedQuiz && (
              <QuizCardClient
                id={generatedQuiz.id}
                quizTopic={generatedQuiz.quizTopic}
                difficulty={generatedQuiz.difficulty}
                questionsCount={generatedQuiz.questionsCount}
                attempt={initialAttempt} // <--- 3. PASS THE ATTEMPT HERE
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
