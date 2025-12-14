import { useRef, useEffect, useTransition } from "react";
import { X, Sparkles, BookOpen, BarChart3 } from "lucide-react";
import { toast } from "sonner";

import {
  QuizConfigModalProps,
  QuizGenerationResult,
} from "@/features/dashboard/types";
import { generateQuizAction } from "@/features/dashboard/actions";
import SpinnerMini from "@/components/ui/SpinnerMini";

export default function QuizGenerationModal({
  isOpen,
  onClose,
}: Readonly<QuizConfigModalProps>) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleFormAction(formData: FormData) {
    startTransition(async () => {
      const { success, message }: QuizGenerationResult =
        await generateQuizAction(formData);
      if (success) {
        toast.success(message);
        onClose();
      } else {
        toast.error(message);
        onClose();
      }
    });
  }

  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm duration-200">
      {/* The Modal Content (Card) */}
      <div
        ref={modalRef}
        className="animate-in zoom-in-95 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-6 py-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <Sparkles className="text-primary-600 h-5 w-5" />
            Configure Quiz
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form action={handleFormAction} className="space-y-5 p-6">
          {/* Field: Topic */}
          <div className="space-y-2">
            <label
              htmlFor="topic"
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <BookOpen className="h-4 w-4 text-gray-500" />
              What topic do you want to study?
            </label>
            <input
              id="topic"
              name="topic"
              type="text"
              required
              placeholder="e.g. React Hooks, World War II, Calculus..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition-all outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <BookOpen className="h-4 w-4 text-gray-500" />
              Describe a little about your topic.
            </label>
            <textarea
              id="topic"
              name="description"
              required
              rows={5}
              placeholder="e.g. This is about..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition-all outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Row for Difficulty & Count */}
          <div className="grid grid-cols-2 gap-4">
            {/* Field: Difficulty */}
            <div className="space-y-2">
              <label
                htmlFor="difficulty"
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <BarChart3 className="h-4 w-4 text-gray-500" />
                Difficulty
              </label>
              <select
                id="difficulty"
                name="difficulty"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="easy">Beginner</option>
                <option value="medium">Intermediate</option>
                <option value="hard">Expert</option>
              </select>
            </div>

            {/* Field: Question Count */}
            <div className="space-y-2">
              <label
                htmlFor="questionCount"
                className="text-sm font-medium text-gray-700"
              >
                Questions
              </label>
              <select
                id="questionCount"
                name="questionsCount"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="5">5 Questions</option>
                <option value="10" defaultValue="10">
                  10 Questions
                </option>
                <option value="15">15 Questions</option>
              </select>
            </div>
          </div>

          {/* Footer / Actions */}
          <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-400 flex flex-[2] cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-medium text-white shadow-md transition-all hover:shadow-lg"
            >
              {isPending ? <SpinnerMini /> : "Generate Quiz"}
              {!isPending && <span className="text-indigo-200">→</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
