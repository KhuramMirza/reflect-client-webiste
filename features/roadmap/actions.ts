"use server";

import { RoadmapGenerationPayload } from "./types";
import {
  generateRoadmap,
  submitRoadmapAssessment,
} from "@/features/roadmap/api";
import { revalidatePath } from "next/cache";

export async function generateRoadmapAction(payload: RoadmapGenerationPayload) {
  // Simulate API call or DB operation

  try {
    const response = await submitRoadmapAssessment(payload);
    const promptId = response.data.responseId;

    revalidatePath("/dashboard");

    const response1 = await generateRoadmap(promptId);

    return { success: true, message: `Roadmap generated successfully.` };
  } catch (error) {
    return {
      success: false,
      message: "There was an error while submitting the roadmap. Try again.",
    };
  }
}
