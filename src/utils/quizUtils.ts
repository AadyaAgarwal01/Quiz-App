import { Question } from '../types/quiz';

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const shuffleQuestions = (questions: Question[]): Question[] => {
  return shuffleArray(questions).map(question => ({
    ...question,
    options: shuffleArray(question.options)
  }));
};

export const calculatePercentage = (score: number, total: number): number => {
  return Math.round((score / total) * 100);
};