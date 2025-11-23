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
  slug: string;
  createdAt: string;
}
