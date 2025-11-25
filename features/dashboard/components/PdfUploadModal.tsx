"use client";

import React, { useState } from "react";
import { Loader2, UploadCloud, X } from "lucide-react";
import { useFormStatus } from "react-dom";
import { generateQuizByFileAction } from "@/features/dashboard/actions";
import { toast } from "sonner";

interface PdfUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Extract Submit Button to use useFormStatus hook
function SubmitButton({ disabled }: Readonly<{ disabled: boolean }>) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed"
    >
      {pending && <Loader2 className="h-4 w-4 animate-spin" />}
      {pending ? "Processing..." : "Submit PDF"}
    </button>
  );
}

export default function PdfUploadModal({
  isOpen,
  onClose,
}: Readonly<PdfUploadModalProps>) {
  const [fileName, setFileName] = useState<string | null>(null);

  if (!isOpen) return null;

  // This helper allows us to close the modal after the server action finishes
  async function clientActionHandler(formData: FormData) {
    // 1. Call your imported server action here:

    const response = await generateQuizByFileAction(formData);
    if (response?.status === "success") {
      setFileName(null);
      toast.success("Quiz generated successfully");
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card w-full max-w-md rounded-3xl border border-neutral-200 p-6 shadow-xl dark:border-neutral-800">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
            Upload PDF
          </h3>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* THE FORM */}
        <form action={clientActionHandler}>
          <div className="mb-6">
            <label
              htmlFor="pdf-upload"
              className={`flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-colors ${
                fileName
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/10"
                  : "hover:border-primary-400 border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
              }`}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud
                  className={`mb-3 h-10 w-10 ${
                    fileName ? "text-primary-500" : "text-neutral-400"
                  }`}
                />
                {fileName ? (
                  <p className="text-primary-600 text-sm font-semibold">
                    {fileName}
                  </p>
                ) : (
                  <>
                    <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      PDF files only
                    </p>
                  </>
                )}
              </div>

              {/* The actual File Input */}
              <input
                id="pdf-upload"
                name="file" // Important: This is the key you access in FormData
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setFileName(e.target.files[0].name);
                  }
                }}
              />
            </label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              Cancel
            </button>

            {/* Submit Button with Loading State */}
            <SubmitButton disabled={!fileName} />
          </div>
        </form>
      </div>
    </div>
  );
}
