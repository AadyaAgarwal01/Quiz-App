export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  timeRemaining: number;
  quizStarted: boolean;
  quizCompleted: boolean;
  startTime: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  timeTaken: number;
  date: string;
}