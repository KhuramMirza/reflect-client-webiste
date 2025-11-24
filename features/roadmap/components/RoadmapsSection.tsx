"use client";

import { Map } from "lucide-react";
import React, { useState } from "react";
import RoadmapGenerationModal from "@/features/roadmap/components/RoadmapGenerationModal";

export default function RoadmapsSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isRoadmapModalOpen, setIsRoadmapModalOpen] = useState(false);

  return (
    <div>
      <div className="mx-auto mt-20 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-primary-400 mt-4 flex text-4xl font-bold">
            Roadmaps
          </h2>
          <button
            onClick={() => setIsRoadmapModalOpen(true)}
            className="bg-primary-500 hover:bg-primary-600 flex cursor-pointer items-center gap-2 rounded-2xl px-6 py-3 font-medium text-white shadow-md transition-colors"
          >
            <Map className="h-4 w-4" />
            Generate Roadmap
          </button>
        </div>
        {/* Render existing roadmaps passed as children */}
        <div className="mt-8">{children}</div>
      </div>

      <RoadmapGenerationModal
        isOpen={isRoadmapModalOpen}
        onClose={() => setIsRoadmapModalOpen(false)}
      />
    </div>
  );
}
