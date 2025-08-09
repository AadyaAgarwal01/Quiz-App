import React from "react";
import { Trophy, Target, Clock, RotateCcw, Star } from "lucide-react";
import { QuizResult } from "../types/quiz";
import bgImage from "../assets/img.jpg"; // adjust path if needed

interface ResultsProps {
  result: QuizResult;
  onRestart: () => void;
  isNewHighScore: boolean;
}

const Results: React.FC<ResultsProps> = ({
  result,
  onRestart,
  isNewHighScore,
}) => {
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-400";
    if (percentage >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return "Outstanding! 🌟";
    if (percentage >= 80) return "Excellent work! 🎉";
    if (percentage >= 70) return "Great job! 👏";
    if (percentage >= 60) return "Good effort! 👍";
    if (percentage >= 50) return "Not bad! 🙂";
    return "Keep practicing! 💪";
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
          {isNewHighScore && (
            <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-400/50 rounded-xl">
              <div className="flex items-center justify-center gap-2 text-yellow-300 mb-2">
                <Star className="w-6 h-6" />
                <span className="font-bold">NEW HIGH SCORE!</span>
                <Star className="w-6 h-6" />
              </div>
              <p className="text-yellow-200 text-sm">
                Congratulations on your achievement!
              </p>
            </div>
          )}

          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Quiz Complete!
            </h1>
            <p className="text-white/80">
              {getScoreMessage(result.percentage)}
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-white/5 rounded-2xl p-6">
              <div
                className={`text-6xl font-bold mb-2 ${getScoreColor(
                  result.percentage
                )}`}
              >
                {result.percentage.toFixed(0)}%
              </div>
              <p className="text-white/80 text-sm">Final Score</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {result.score}/{result.totalQuestions}
                </div>
                <p className="text-white/60 text-xs">Correct Answers</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {formatTime(result.timeTaken)}
                </div>
                <p className="text-white/60 text-xs">Time Taken</p>
              </div>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
            style={{
              background: "linear-gradient(to right, #6c012f, #00253d)",
            }}
          >
            <RotateCcw className="w-5 h-5" />
            Take Quiz Again
          </button>

          <p className="text-white/60 text-sm mt-4">
            Quiz completed on {new Date(result.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
