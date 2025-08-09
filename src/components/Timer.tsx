import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeRemaining: number;
  totalTime: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, totalTime, onTimeUp }) => {
  const percentage = (timeRemaining / totalTime) * 100;
  const isLowTime = timeRemaining <= 10;

  useEffect(() => {
    if (timeRemaining === 0) {
      onTimeUp();
    }
  }, [timeRemaining, onTimeUp]);

  return (
    <div className="flex items-center gap-3 mb-6">
      <Clock className={`w-5 h-5 ${isLowTime ? 'text-red-400' : 'text-white/80'}`} />
      <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${
            isLowTime
              ? 'bg-gradient-to-r from-red-500 to-red-600'
              : 'bg-gradient-to-r from-green-500 to-blue-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className={`font-mono font-bold ${isLowTime ? 'text-red-400' : 'text-white'}`}>
        {timeRemaining}s
      </span>
    </div>
  );
};

export default Timer;