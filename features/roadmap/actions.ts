"use server";

import { RoadmapGenerationPayload } from "./types";
import {
  generateRoadmap,
  submitRoadmapAssessment,
} from "@/features/roadmap/api";
import { revalidatePath } from "next/cache";

export async function generateRoadmapAction(payload: RoadmapGenerationPayload) {
  // Simulate API call or DB operation
  console.log("Received Roadmap Request:", payload);

  const response = await submitRoadmapAssessment(payload);
  const promptId = response.data.responseId;

  revalidatePath("/dashboard");

  return await generateRoadmap(promptId);
}
