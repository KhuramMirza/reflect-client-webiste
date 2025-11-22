"use client";

import React, { createContext, useContext } from "react";
import { User } from "@/features/auth/types";

const UserContext = createContext<User | null>(null);

export function UserProvider({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: User;
}>) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
