import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ListOrdered,
  Map,
  Target,
} from "lucide-react";
import { RoadmapCardProps } from "@/features/roadmap/types";

export default function RoadmapCard({
  title,
  level,
  goal,
  checkPointsCount,
  id,
  createdAt,
}: Readonly<RoadmapCardProps>) {
  // Helper for Level Colors
  const getLevelColor = (lvl: string) => {
    switch (lvl.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <Link
      href={`/roadmap/${id}`}
      className="group hover:shadow-primary-200 relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Decorative Background Gradient Blob */}
      <div className="bg-primary-500/5 group-hover:bg-primary-500/10 absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl transition-all" />

      {/* Top Section: Icon & Level */}
      <div className="mb-6 flex items-start justify-between">
        <div className="bg-primary-50 group-hover:bg-primary-100 flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition-colors">
          <Map className="text-primary-600 h-6 w-6" />
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase ${getLevelColor(level)}`}
        >
          {level}
        </span>
      </div>

      {/* Middle Section: Content */}
      <div className="relative z-10 mb-6 flex-1">
        <h3 className="group-hover:text-primary-600 mb-2 line-clamp-2 text-xl font-bold text-gray-900 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Target className="h-4 w-4" />
          <span className="line-clamp-1">{goal}</span>
        </div>
      </div>

      {/* Bottom Section: Footer Stats */}
      <div className="relative z-10 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5" title="Milestones">
            <ListOrdered className="h-4 w-4 text-gray-400" />
            <span className="font-medium text-gray-700">
              {checkPointsCount} Steps
            </span>
          </div>
          <div className="flex items-center gap-1.5" title="Created Date">
            <CalendarDays className="h-4 w-4 text-gray-400" />
            {/* Simple date format if you don't have a utility */}
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="text-primary-500 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
}
