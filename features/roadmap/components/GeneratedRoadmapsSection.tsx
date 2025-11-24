import Link from "next/link";
import { Map, MapPin } from "lucide-react";
import RoadmapCard from "./RoadmapCard";
import { RoadmapDocument } from "@/features/roadmap/types";
import { fetchUserRoadmaps } from "@/features/roadmap/api";

export default async function GeneratedRoadmapsSection() {
  // 1. Fetch data
  // Assuming response structure: { roadmaps: RoadmapDocument[] }
  const { data } = await fetchUserRoadmaps();

  // 2. Sort/Slice (Show top 6 for a balanced grid)
  const recentRoadmaps = data?.roadmaps ? data?.roadmaps.slice(0, 6) : [];

  return (
    <div className="mt-8 mb-10 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-900">
          <Map className="text-primary-500 h-6 w-6" />
          Your Roadmaps
        </h2>
        {recentRoadmaps.length > 0 && (
          <Link
            href="/roadmap"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium hover:underline"
          >
            View all
          </Link>
        )}
      </div>

      {recentRoadmaps.length > 0 ? (
        // Grid Layout: 1 col mobile, 2 col tablet, 3 col desktop -> Makes them "Squarish"
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentRoadmaps.map((map: RoadmapDocument) => (
            <RoadmapCard
              key={map._id}
              id={map._id}
              title={map.title}
              level={map.level}
              goal={map.goal}
              checkPointsCount={map.checkPoints.length}
              // slug={map.slug}
              createdAt={map.createdAt}
            />
          ))}
        </div>
      ) : (
        // Empty State (Reused logic, different Icon)
        <div className="border-primary-200 bg-primary-50/30 animate-in fade-in zoom-in flex flex-col items-center justify-center rounded-3xl border-2 border-dashed py-20 text-center duration-500">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
            <MapPin className="text-primary-500 h-10 w-10" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            No roadmaps generated yet!
          </h3>
          <p className="mb-6 max-w-sm text-sm text-gray-500">
            You haven&#39;t created a learning path yet. Start a new journey
            today.
          </p>
          {/* Note: This button usually triggers the Modal you built previously */}
          <div className="text-primary-600 text-sm font-medium opacity-50">
            Click Generate Roadmap above to get started
          </div>
        </div>
      )}
    </div>
  );
}
