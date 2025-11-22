"use client";

import Link from "next/link";
import Image from "next/image";
import REFLECT_LOGO from "@/public/logos/reflect_logo.svg";
import { useUser } from "@/features/auth/UserContext";
import SignOutButton from "@/components/ui/SignOutButton";

export default function DashboardHeader() {
  const user = useUser();
  console.log(user);
  return (
    <header className="bg-primary-200 flex items-center justify-around text-lg font-semibold">
      <Link href="/dashboard">
        <Image src={REFLECT_LOGO} alt="Reflect Logo" className="h-20 w-20" />
      </Link>

      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10">
          <Image
            fill
            src={user?.profileImage as string}
            alt={user?.name as string}
            className="rounded-2xl object-cover"
          />
        </div>
        <p className="mr-10">{user?.name}</p>
        <SignOutButton />
      </div>
    </header>
  );
}
