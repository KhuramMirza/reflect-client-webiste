import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Globe,
  Layers,
  Map,
  PlayCircle,
  Share2,
} from "lucide-react";
import { fetchRoadmapDetails } from "@/features/roadmap/api";

// Helper to determine badge colors
const getLevelBadge = (level: string) => {
  const styles = {
    Beginner: "bg-green-100 text-green-700 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Advanced: "bg-red-100 text-red-700 border-red-200",
  };
  return styles[level as keyof typeof styles] || "bg-gray-100 text-gray-700";
};

export default async function RoadmapDetailsPage({
  params,
}: Readonly<{
  params: { roadmapId: string };
}>) {
  const { roadmapId } = await params;
  // 1. Fetch Data
  const roadmapData = await fetchRoadmapDetails(roadmapId);

  // Handle 404 or Loading states appropriately in real app
  if (!roadmapData) return <div>Roadmap not found</div>;

  const { title, level, goal, checkPoints, createdBy, createdAt, _id } =
    roadmapData.data.roadmap;

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* --- TOP NAVIGATION --- */}
      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Link
          href="/dashboard"
          className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Roadmaps
        </Link>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50 md:p-12">
          {/* Decorative Background Blob */}
          <div className="bg-primary-500/10 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold tracking-wide uppercase ${getLevelBadge(level)}`}
                >
                  {level}
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                  <Globe className="h-3 w-3" />
                  {goal}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:max-w-3xl">
                {title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-gray-400" />
                  <span>{checkPoints?.length} Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>
                    Last updated {new Date(createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-gray-900">
                <Share2 className="h-4 w-4" />
                Share
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 shadow-primary-500/20 flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                <PlayCircle className="h-5 w-5" />
                Start Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-12">
        {/* LEFT COLUMN: THE TIMELINE (Usually takes 8/12 columns) */}
        <div className="lg:col-span-8">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
            <Map className="text-primary-500 h-5 w-5" />
            Learning Path
          </h3>

          <div className="space-y-6">
            {checkPoints?.map((point, index) => (
              <Link
                href={`/roadmap/${roadmapId}/checkpoint/${point._id}`}
                key={point._id}
                className="group relative flex gap-4 md:gap-8"
              >
                {/* Visual Connector Line */}
                {index !== checkPoints.length - 1 && (
                  <div className="absolute top-12 left-[19px] h-[calc(100%+24px)] w-0.5 bg-gray-200 md:left-[27px]" />
                )}

                {/* Number Circle */}
                <div className="group-hover:bg-primary-500 relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-sm font-bold text-gray-500 shadow-sm transition-colors group-hover:text-white md:h-14 md:w-14 md:text-lg">
                  {index + 1}
                </div>

                {/* The Card */}
                <div className="hover:border-primary-200 hover:shadow-primary-500/5 w-full cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="group-hover:text-primary-600 text-lg font-bold text-gray-900 transition-colors">
                      {point.title}
                    </h4>
                    <ChevronRight className="group-hover:text-primary-400 h-5 w-5 text-gray-300 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {point.description}
                  </p>

                  {/* Optional: Add 'Sub-tasks' visual mock to make it look deeper */}
                  <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />~ 2 hours
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Key Concepts
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY SIDEBAR (4/12 columns) */}
        <div className="lg:col-span-4">
          <div className="sticky top-10 space-y-6">
            {/* Author Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Created By
              </h4>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src={createdBy?.profileImage}
                    alt={createdBy?.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{createdBy?.name}</p>
                  <p className="text-xs text-gray-500">Curriculum Expert</p>
                </div>
              </div>
            </div>

            {/* Progress / Stats Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Your Progress
              </h4>

              {/* Mock Progress Bar */}
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span className="text-gray-900">0% Complete</span>
                <span className="text-gray-500">0/{checkPoints?.length}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="bg-primary-500 h-2 w-0 rounded-full transition-all duration-1000"></div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                  <span>Total Modules</span>
                  <span className="font-bold text-gray-900">
                    {checkPoints?.length}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                  <span>Difficulty</span>
                  <span
                    className={`font-bold ${level === "Intermediate" ? "text-yellow-600" : "text-gray-900"}`}
                  >
                    {level}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
