import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, LayoutList } from "lucide-react";
import { fetchCheckpointDetails } from "@/features/roadmap/api";
import TopicLearningModule from "@/features/roadmap/components/TopicLearningModule";

export default async function CheckpointDetailsPage({
  params,
}: Readonly<{
  params: { roadmapId: string; checkpointId: string };
}>) {
  const { roadmapId, checkpointId } = await params;
  // const { checkpointId } = await params;

  // Fetch specific checkpoint details (which includes the populated topics array)
  // const checkpointData = await fetchCheckpointDetails(roadmapId, checkpointId);

  const checkpoint = await fetchCheckpointDetails(checkpointId);

  if (!checkpoint) return <div>Checkpoint not found</div>;

  const { title, description, topics } = checkpoint;

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      {/* 1. Header Navigation */}
      <div className="mx-auto mb-8 max-w-4xl px-4">
        <Link
          href={`/roadmap/${roadmapId}`}
          className="group mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Roadmap
        </Link>

        {/* Checkpoint Title Card */}
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50">
          <div className="mb-2 flex items-center gap-3">
            <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 text-xs font-bold uppercase">
              Current Module
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">{description}</p>

          <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-4 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-2">
              <LayoutList className="h-4 w-4" />
              {topics?.length} Topics
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              0% Complete
            </span>
          </div>
        </div>
      </div>

      {/* 2. Topics List (The "Long Page") */}
      <div className="mx-auto max-w-4xl space-y-8 px-4">
        {/* Table of Contents (Optional Sticky Sidebar could go here, but simple list for now) */}
        <div className="flex items-center gap-2 pl-2 text-sm font-bold tracking-wider text-gray-400 uppercase">
          Module Topics
        </div>

        {topics?.map((topic) => (
          <TopicLearningModule key={topic._id} topic={topic} />
        ))}

        {/* End of Module */}
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Module Completed?</h3>
          <p className="mt-2 mb-6 max-w-sm text-gray-500">
            Once you have reviewed all topics and taken the quizzes, mark this
            checkpoint as complete to progress.
          </p>
          <button className="rounded-xl bg-gray-900 px-8 py-3 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-black hover:shadow-xl">
            Mark Checkpoint as Complete
          </button>
        </div>
      </div>
    </div>
  );
}
