"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  label,
}: Readonly<{
  label: string;
}>) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-primary-600 hover:bg-primary-700 flex items-center gap-2 rounded-full px-8 py-3 font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:hover:translate-y-0"
    >
      {pending ? (
        <>
          <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
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
          Processing...
        </>
      ) : (
        label
      )}
    </button>
  );
}
