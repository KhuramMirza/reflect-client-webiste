"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { CheckCircle2, ChevronLeft, Map, X } from "lucide-react";
import { toast } from "sonner";

import SpinnerMini from "@/components/ui/SpinnerMini";
import { RoadmapGenerationModalProps } from "@/features/roadmap/types";
import { ROADMAP_QUESTIONS } from "@/features/roadmap/data";
import { generateRoadmapAction } from "@/features/roadmap/actions";

export default function RoadmapGenerationModal({
  isOpen,
  onClose,
}: Readonly<RoadmapGenerationModalProps>) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition();

  // State for the wizard
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setAnswers({});
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle click outside to close
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

  if (!isOpen) return null;

  const currentQuestion = ROADMAP_QUESTIONS[currentStep];
  const isLastStep = currentStep === ROADMAP_QUESTIONS.length - 1;
  const progress = ((currentStep + 1) / ROADMAP_QUESTIONS.length) * 100;

  const handleOptionSelect = (key: string, value: string) => {
    // Save answer
    setAnswers((prev) => ({ ...prev, [key]: value }));

    // If not last step, advance automatically
    if (!isLastStep) {
      setTimeout(() => setCurrentStep((prev) => prev + 1), 250); // Slight delay for visual feedback
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleGenerate = () => {
    // Ensure the last answer is recorded (it is, because we set it on click)
    // Check if all questions are answered (basic validation)
    const isComplete = ROADMAP_QUESTIONS.every((q) => answers[q.key]);

    if (!isComplete) {
      toast.error("Please answer all questions");
      return;
    }

    startTransition(async () => {
      const { success, message } = await generateRoadmapAction({
        responses: answers,
      });
      if (success) {
        toast.success(message);
        onClose();
      } else {
        toast.error(message);
        onClose();
      }
    });
  };

  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm duration-200">
      <div
        ref={modalRef}
        className="animate-in zoom-in-95 w-full max-w-lg overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="relative border-b border-gray-100 bg-gray-50/50 px-6 py-4">
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
            <div
              className="bg-primary-500 h-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {currentStep > 0 ? (
                <button
                  onClick={handleBack}
                  className="hover:text-primary-600 text-gray-400 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              ) : (
                <Map className="text-primary-600 h-5 w-5" />
              )}

              <h2 className="text-xl font-semibold text-gray-800">
                Create Roadmap
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-gray-400">
                {currentStep + 1} / {ROADMAP_QUESTIONS.length}
              </span>
              <button
                onClick={onClose}
                className="cursor-pointer rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Body - The Questions */}
        <div className="flex min-h-[350px] flex-col p-6">
          <div className="mb-6">
            <h3 className="animate-in slide-in-from-right-4 key={currentStep} mb-2 text-lg font-medium text-gray-900 duration-300">
              {currentQuestion.question}
            </h3>
            <p className="text-sm text-gray-500">
              Select the option that best describes you.
            </p>
          </div>

          <div className="flex-1 space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected =
                answers[currentQuestion.key] === (option.text || option.value); // Depending on if you want to send text or value

              // NOTE: To match your requested output exactly (using text values like "Beginner"),
              // we pass option.text. If you want to send keys, pass option.value.
              // Based on your JSON request: "experience_level": "beginner" (lowercase),
              // I will assume using the values from the data file is safer.

              const isActive = answers[currentQuestion.key] === option.text; // Checking UI state based on text since options are displayed as text

              return (
                <button
                  key={option.text}
                  type="button"
                  onClick={() =>
                    handleOptionSelect(currentQuestion.key, option.text)
                  } // Sending Text as per your "options" array request, or switch to .value
                  className={`group flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-primary-500 bg-primary-50/50 text-primary-700"
                      : "hover:border-primary-200 border-gray-100 text-gray-700 hover:bg-gray-50"
                  } `}
                >
                  <span className="font-medium">{option.text}</span>
                  {isActive && (
                    <CheckCircle2 className="text-primary-500 h-5 w-5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer - Only show "Generate" on last step */}
        <div className="border-t border-gray-100 bg-gray-50/30 p-4">
          {isLastStep ? (
            <button
              onClick={handleGenerate}
              disabled={!answers[currentQuestion.key] || isPending}
              className="bg-primary-500 hover:bg-primary-600 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-white shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending ? <SpinnerMini /> : "Generate Personalized Roadmap"}
              {!isPending && <span className="text-indigo-200">→</span>}
            </button>
          ) : (
            <button
              disabled={true}
              className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-gray-200 px-4 py-3 font-medium text-gray-400"
            >
              Select an option to continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
