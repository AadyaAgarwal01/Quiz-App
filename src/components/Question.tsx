import React, { useState, useEffect } from "react";
import { Question as QuestionType } from "../types/quiz";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedAnswer: number) => void;
  timeRemaining: number;
  onTimeUp: () => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  timeRemaining,
  onTimeUp,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setIsCorrect(answerIndex === question.correctAnswer);
    setShowResult(true);

    setTimeout(() => {
      onAnswer(answerIndex);
    }, 1500);
  };

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
  }, [question]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500/20 text-green-300";
      case "medium":
        return "bg-yellow-500/20 text-yellow-300";
      case "hard":
        return "bg-red-500/20 text-red-300";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  const getOptionClass = (index: number) => {
    if (!showResult) {
      return "bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 text-white hover:scale-102 cursor-pointer";
    }

    if (index === question.correctAnswer) {
      return "bg-green-500/30 border-green-400 text-green-100";
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-red-500/30 border-red-400 text-red-100";
    }

    return "bg-white/5 border-white/20 text-white/60";
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('img.jpg')" }}
    >
      <div className="max-w-2xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <ProgressBar current={questionNumber} total={totalQuestions} />

          <Timer
            timeRemaining={timeRemaining}
            totalTime={30}
            onTimeUp={onTimeUp}
          />

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                  question.difficulty
                )}`}
              >
                {question.difficulty.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                {question.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white leading-relaxed">
              {question.question}
            </h2>
          </div>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-center gap-3 ${getOptionClass(
                  index
                )}`}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                    showResult && index === question.correctAnswer
                      ? "border-green-400 bg-green-500/30"
                      : showResult &&
                        index === selectedAnswer &&
                        index !== question.correctAnswer
                      ? "border-red-400 bg-red-500/30"
                      : "border-white/50"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1 font-medium">{option}</span>
                {showResult && index === question.correctAnswer && (
                  <CheckCircle className="w-6 h-6 text-green-400" />
                )}
                {showResult &&
                  index === selectedAnswer &&
                  index !== question.correctAnswer && (
                    <XCircle className="w-6 h-6 text-red-400" />
                  )}
              </button>
            ))}
          </div>

          {showResult && (
            <div
              className={`mt-6 p-4 rounded-xl text-center font-semibold ${
                isCorrect
                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                  : "bg-red-500/20 text-red-300 border border-red-500/30"
              }`}
            >
              {isCorrect
                ? "🎉 Correct! Well done!"
                : "❌ Incorrect! Better luck next time!"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
