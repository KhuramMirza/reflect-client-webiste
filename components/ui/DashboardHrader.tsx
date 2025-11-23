"use client";

import Link from "next/link";
import Image from "next/image";
import REFLECT_LOGO from "@/public/logos/reflect_logo.svg";
import { useUser } from "@/features/auth/UserContext";
import SignOutButton from "@/components/ui/SignOutButton";

export default function DashboardHeader() {
  const user = useUser();

  // Fallback in case user data isn't loaded yet
  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "U";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 px-6 py-3 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <Link href="/dashboard" className="transition-opacity hover:opacity-80">
          <Image
            src={REFLECT_LOGO}
            alt="Reflect Logo"
            className="h-12 w-auto object-contain" // Reduced height for dashboard efficiency
          />
        </Link>

        {/* User & Actions Section */}
        <div className="flex items-center gap-4">
          {/* User Profile Pill */}
          <div className="hidden items-center gap-3 rounded-full border border-gray-100 bg-gray-50 py-1.5 pr-4 pl-1.5 sm:flex">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-200">
              {user?.profileImage ? (
                <Image
                  fill
                  src={user.profileImage}
                  alt={user?.name || "User"}
                  className="object-cover"
                />
              ) : (
                // Fallback if no image exists
                <div className="bg-primary-100 text-primary-700 flex h-full w-full items-center justify-center text-xs font-bold">
                  {userInitials}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-sm leading-none font-bold text-gray-900">
                {user?.name || "Loading..."}
              </p>
              <span className="text-[10px] font-medium tracking-wide text-gray-500 uppercase">
                Member
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden h-8 w-px bg-gray-200 sm:block"></div>

          {/* Sign Out Button */}
          <div className="shrink-0">
            <SignOutButton />
          </div>
        </div>
      </div>
    </header>
  );
}
