export interface QuizConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type GenerateQuiz = {
  topic: string;
  description: string;
  difficulty: string;
  questionsCount: number;
};

export type QuizGenerationResult = {
  status: string;
  message: string;
};
