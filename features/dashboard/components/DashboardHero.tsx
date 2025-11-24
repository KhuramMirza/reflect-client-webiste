"use client";

import Link from "next/link";
import { useUser } from "@/features/auth/UserContext";
import {
  PlayCircleIcon,
  FireIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

export default function DashboardHero() {
  const user = useUser();

  // Get dynamic date
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // Get time-based greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="from-primary-800 to-primary-600 relative mx-4 overflow-hidden rounded-[2rem] bg-gradient-to-r px-8 py-10 text-white shadow-xl md:px-12 md:py-12">
      {/* Background Decor - Subtle geometric shapes */}
      <div className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="bg-primary-500/30 absolute -bottom-20 left-20 h-80 w-80 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-full w-1/2 bg-gradient-to-l from-black/10 to-transparent"></div>

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* LEFT SIDE: Welcome & Motivation */}
        <div className="max-w-2xl space-y-4">
          <div className="text-primary-100 flex items-center gap-2 text-sm font-medium">
            <span className="tracking-wider uppercase">{date}</span>
            <span>•</span>
            <span>Keep up the momentum! 🚀</span>
          </div>

          <h1 className="text-4xl leading-tight font-bold md:text-5xl">
            {greeting},{" "}
            <span className="text-primary-100">
              {user?.name?.split(" ")[0] || "Scholar"}
            </span>
            .
          </h1>

          <p className="text-primary-100/90 max-w-xl text-lg">
            You've completed <strong>80%</strong> of your weekly goal. Jump back
            in to reach your next milestone.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Streak Badge */}
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <FireIcon className="h-5 w-5 text-orange-400" />
              <span className="font-bold">12 Day Streak</span>
            </div>
            {/* XP Badge */}
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <TrophyIcon className="h-5 w-5 text-yellow-400" />
              <span className="font-bold">1,250 XP</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: "Resume Learning" Card */}
        <div className="w-full lg:w-auto lg:min-w-[350px]">
          <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-1 backdrop-blur-md transition-transform hover:-translate-y-1">
            <div className="rounded-xl bg-gray-900/40 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-primary-200 text-xs font-bold tracking-wider uppercase">
                    Continue Learning
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    Advanced React Patterns
                  </h3>
                </div>
                <div className="text-primary-600 rounded-full bg-white p-2 shadow-lg transition-transform group-hover:scale-110">
                  <PlayCircleIcon className="h-6 w-6" />
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-300">Module 4 of 10</span>
                  <span className="text-white">42%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                  <div className="from-primary-400 h-full w-[42%] rounded-full bg-gradient-to-r to-white transition-all duration-500"></div>
                </div>
              </div>

              <Link href="/dashboard" className="absolute inset-0 z-20">
                <span className="sr-only">Resume Course</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
