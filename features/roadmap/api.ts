import { getAuthToken } from "@/features/auth/token";
import { fetchApi } from "@/lib/fetcher";
import { RoadmapGenerationPayload } from "@/features/roadmap/types";

export async function submitRoadmapAssessment(
  response: RoadmapGenerationPayload,
) {
  const token = await getAuthToken();
  return await fetchApi(`/initial-assessment/submit`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(response),
  });
}

export async function generateRoadmap(promptId: string) {
  const token = await getAuthToken();
  return await fetchApi(`/roadmaps/generate/${promptId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function fetchUserRoadmaps() {
  const token = await getAuthToken();
  return await fetchApi(`/roadmaps`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
