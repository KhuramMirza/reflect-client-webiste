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
  success: boolean;
  message: string;
};

export type SimpleQuizData = {
  id: string;
  quizTopic: string;
  difficulty: string;
  questionsCount: number;
};

export interface Question {
  _id: string;
  questionText: string;
  options: string[];
}

export interface QuizDoc {
  _id: string;
  quizTopic: string;
  questions: Question[];
}

export interface ApiResponse {
  status: string;
  data: {
    doc: QuizDoc;
  };
}
