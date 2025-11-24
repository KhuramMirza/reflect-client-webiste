export interface RoadmapGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface RoadmapGenerationPayload {
  responses: Record<string, string>;
}

export interface RoadmapDocument {
  _id: string;
  title: string;
  level: string;
  goal: string;
  checkPoints: string[]; // Array of IDs
  slug: string;
  createdAt: string; // or Date
}

// The props we will pass to the card
export interface RoadmapCardProps {
  id: string;
  title: string;
  level: string;
  goal: string;
  checkPointsCount: number;
  // slug: string;
  createdAt: string;
}

export interface RoadmapCheckpoint {
  _id: string;
  title: string;
  description: string;
}

export interface RoadmapCreator {
  _id: string;
  name: string;
  profileImage: string;
}

export interface RoadmapDetail {
  _id: string;
  title: string;
  level: string;
  goal: string;
  checkPoints: RoadmapCheckpoint[];
  createdBy: RoadmapCreator;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface RoadmapApiResponse {
  status: string;
  data: {
    roadmap: RoadmapDetail;
  };
}

export interface Resource {
  _id: string;
  title: string;
  description: string;
  link: string;
}

export interface Topic {
  _id: string;
  title: string;
  description: string; // We will treat this as Markdown
  resources: Resource[];
}

export interface CheckpointDetail {
  _id: string;
  title: string;
  description: string;
  topics: Topic[];
  roadmap: string; // roadmap ID
}

export interface CheckpointApiResponse {
  status: string;
  checkpoint: CheckpointDetail;
}
