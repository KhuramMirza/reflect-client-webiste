"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { BookOpen, Bot, ExternalLink, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Topic } from "@/features/roadmap/types";

export default function TopicLearningModule({
  topic,
}: Readonly<{ topic: Topic }>) {
  // State for AI Chat
  const [showChat, setShowChat] = useState(false);
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // State for Quiz
  const [showQuiz, setShowQuiz] = useState(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);

  // --- HANDLERS ---

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Add user message
    const newHistory = [
      ...chatHistory,
      { role: "user" as const, text: question },
    ];
    setChatHistory(newHistory);
    setQuestion("");
    setIsAiLoading(true);

    // SIMULATE API CALL
    setTimeout(() => {
      setChatHistory([
        ...newHistory,
        {
          role: "ai",
          text: `Here is an answer about **${topic.title}**: \n\n This is a simulated response. In your real app, this would come from your backend AI service explaining "${newHistory[newHistory.length - 1].text}".`,
        },
      ]);
      setIsAiLoading(false);
    }, 1500);
  };

  const handleGenerateQuiz = () => {
    setIsGeneratingQuiz(true);
    // SIMULATE GENERATION
    setTimeout(() => {
      setIsGeneratingQuiz(false);
      setShowQuiz(true);
      toast.success("Quiz generated successfully!");
    }, 2000);
  };

  return (
    <div
      className="scroll-mt-20 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
      id={topic._id}
    >
      {/* 1. TOPIC HEADER & MARKDOWN CONTENT */}
      <div className="p-6 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
          <BookOpen className="text-primary-500 h-6 w-6" />
          {topic.title}
        </h2>

        {/* Markdown Box */}
        <div className="prose prose-slate prose-lg max-w-none rounded-xl border border-gray-100 bg-gray-50/50 p-6">
          <ReactMarkdown>{topic.description}</ReactMarkdown>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setShowChat(!showChat)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              showChat
                ? "bg-indigo-100 text-indigo-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Bot className="h-4 w-4" />
            {showChat ? "Hide AI Tutor" : "Ask AI Tutor"}
          </button>

          <button
            onClick={handleGenerateQuiz}
            disabled={isGeneratingQuiz}
            className="bg-primary-50 text-primary-700 hover:bg-primary-100 flex items-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-colors"
          >
            {isGeneratingQuiz ? (
              <span className="flex items-center gap-2">Generating...</span>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate Quiz
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. AI CHAT SECTION (Expandable) */}
      {showChat && (
        <div className="animate-in slide-in-from-top-2 border-t border-gray-100 bg-indigo-50/30 p-6">
          <div className="mb-4 text-sm font-semibold text-indigo-900">
            Ask a question about {topic.title}
          </div>

          {/* Chat History */}
          <div className="mb-4 max-h-60 space-y-3 overflow-y-auto rounded-xl border border-indigo-100 bg-white p-4 shadow-sm">
            {chatHistory.length === 0 && (
              <p className="text-center text-sm text-gray-400 italic">
                No messages yet. Ask something!
              </p>
            )}
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === "user"
                      ? "rounded-tr-sm bg-indigo-600 text-white"
                      : "rounded-tl-sm bg-gray-100 text-gray-800"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isAiLoading && (
              <div className="flex justify-start">
                <div className="animate-pulse rounded-2xl bg-gray-100 px-4 py-2 text-sm text-gray-500">
                  AI is thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleAskAI} className="relative flex items-center">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="E.g., Can you explain this with a code example?"
              className="w-full rounded-xl border border-gray-200 py-3 pr-12 pl-4 text-sm shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={!question.trim() || isAiLoading}
              className="absolute right-2 rounded-lg bg-indigo-600 p-1.5 text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* 3. QUIZ SECTION (Expandable) */}
      {showQuiz && (
        <div className="animate-in slide-in-from-top-2 border-t border-gray-100 bg-amber-50/30 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-bold text-amber-900">
              <Sparkles className="h-4 w-4 text-amber-600" />
              Quiz: {topic.title}
            </h3>
            <button
              onClick={() => setShowQuiz(false)}
              className="text-xs text-amber-700 underline"
            >
              Close Quiz
            </button>
          </div>

          {/* Placeholder for your actual Quiz Component */}
          <div className="rounded-xl border border-amber-200 bg-white p-8 text-center">
            <p className="mb-4 text-gray-500">
              Quiz interface would render here based on generated questions.
            </p>
            <button className="rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 hover:bg-amber-200">
              Start Assessment
            </button>
          </div>
        </div>
      )}

      {/* 4. RESOURCES SECTION */}
      {topic.resources && topic.resources.length > 0 && (
        <div className="rounded-b-2xl border-t border-gray-100 bg-gray-50 p-6">
          <h4 className="mb-3 text-sm font-bold tracking-wider text-gray-500 uppercase">
            Recommended Resources
          </h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {topic.resources.map((res) => (
              <a
                key={res._id}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-all hover:border-indigo-300 hover:shadow-md"
              >
                <div className="bg-primary-50 text-primary-600 mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg group-hover:bg-indigo-100">
                  <ExternalLink className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-indigo-600">
                    {res.title}
                  </div>
                  <div className="line-clamp-1 text-xs text-gray-500">
                    {res.description}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
