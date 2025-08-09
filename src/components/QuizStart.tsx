// import React from "react";
import { Play, Trophy, Clock, Target } from "lucide-react";
import bgImage from "../assets/img.jpg"; // ✅ Import image

interface QuizStartProps {
  onStartQuiz: () => void;
  totalQuestions: number;
  highScore: number;
}

const QuizStart: React.FC<QuizStartProps> = ({
  onStartQuiz,
  totalQuestions,
  highScore,
}) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }} // ✅ Use imported path
    >
      <div className="max-w-md w-full">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/30 rounded-full mb-4 shadow-md">
              <Target className="w-10 h-10 text-gray-700" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">KnowStorm</h1>
            <p className="text-white">Test your programming knowledge!</p>
          </div>

          <div className="space-y-4 mb-8 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100/50 rounded-lg flex items-center justify-center shadow">
                <Target className="w-4 h-4" />
              </div>
              <span>{totalQuestions} challenging questions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100/50 rounded-lg flex items-center justify-center shadow">
                <Clock className="w-4 h-4" />
              </div>
              <span>30 seconds per question</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100/50 rounded-lg flex items-center justify-center shadow">
                <Trophy className="w-4 h-4" />
              </div>
              <span>High Score: {highScore}%</span>
            </div>
          </div>

          <button
            onClick={onStartQuiz}
            style={{
              background: "linear-gradient(to right, #6c012f, #00253d)",
            }}
            className="w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl"
          >
            <Play className="w-5 h-5" />
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
