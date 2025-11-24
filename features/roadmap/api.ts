import { getAuthToken } from "@/features/auth/token";
import { fetchApi } from "@/lib/fetcher";
import { RoadmapGenerationPayload } from "@/features/roadmap/types";
import { CheckpointDetail } from "./types";

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

export async function fetchRoadmapDetails(id: string) {
  const token = await getAuthToken();
  return await fetchApi(`/roadmaps/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function generateTopics(checkpointId: string) {
  const token = await getAuthToken();
  return await fetchApi(`/topics/generate/${checkpointId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function fetchCheckpointDetails(
  checkpointId: string,
): Promise<CheckpointDetail | null> {
  const token = await getAuthToken();

  // 1. Initial Fetch
  const { checkpoint } = await fetchApi(
    `/roadmaps/checkpoints/${checkpointId}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  const needsGeneration = !checkpoint.topics || checkpoint.topics.length === 0;

  if (needsGeneration) {
    console.log("Generating topics for checkpoint...");
    await generateTopics(checkpointId);

    // 2. Re-fetch with CACHE BUSTING
    // We add ?refresh=timestamp to trick the browser into thinking it's a new request
    const response = await fetchApi(
      `/roadmaps/checkpoints/${checkpointId}?refresh=${Date.now()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache", // Extra safety
        },
      },
    );

    return response.checkpoint;
  }

  return checkpoint;
}
