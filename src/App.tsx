import React, { useState, useEffect, useCallback } from 'react';
import { QuizState, QuizResult } from './types/quiz';
import { quizQuestions } from './data/questions';
import { shuffleQuestions, calculatePercentage } from './utils/quizUtils';
import { useLocalStorage } from './hooks/useLocalStorage';
import QuizStart from './components/QuizStart';
import Question from './components/Question';
import Results from './components/Results';

const QUESTION_TIME_LIMIT = 30; // seconds

function App() {
  const [highScore, setHighScore] = useLocalStorage<number>('quizHighScore', 0);
  const [questions] = useState(() => shuffleQuestions(quizQuestions));
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    timeRemaining: QUESTION_TIME_LIMIT,
    quizStarted: false,
    quizCompleted: false,
    startTime: 0
  });

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const startQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      timeRemaining: QUESTION_TIME_LIMIT,
      quizStarted: true,
      quizCompleted: false,
      startTime: Date.now()
    });
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      timeRemaining: QUESTION_TIME_LIMIT,
      quizStarted: false,
      quizCompleted: false,
      startTime: 0
    });
  };

  const nextQuestion = useCallback(() => {
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        timeRemaining: QUESTION_TIME_LIMIT
      }));
    } else {
      // Quiz completed
      setQuizState(prev => ({ ...prev, quizCompleted: true }));
    }
  }, [quizState.currentQuestionIndex, questions.length]);

  const handleAnswer = (selectedAnswer: number) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, selectedAnswer]
    }));

    setTimeout(() => {
      nextQuestion();
    }, 100);
  };

  const handleTimeUp = () => {
    setQuizState(prev => ({
      ...prev,
      answers: [...prev.answers, -1] // -1 indicates no answer (timeout)
    }));
    
    setTimeout(() => {
      nextQuestion();
    }, 100);
  };

  // Timer effect
  useEffect(() => {
    if (quizState.quizStarted && !quizState.quizCompleted && quizState.timeRemaining > 0) {
      const newTimer = setTimeout(() => {
        setQuizState(prev => ({ ...prev, timeRemaining: prev.timeRemaining - 1 }));
      }, 1000);
      setTimer(newTimer);
      
      return () => {
        if (newTimer) clearTimeout(newTimer);
      };
    }
  }, [quizState.quizStarted, quizState.quizCompleted, quizState.timeRemaining]);

  // Auto-submit when time runs out
  useEffect(() => {
    if (quizState.timeRemaining === 0 && quizState.quizStarted && !quizState.quizCompleted) {
      handleTimeUp();
    }
  }, [quizState.timeRemaining, quizState.quizStarted, quizState.quizCompleted]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const getQuizResult = (): QuizResult => {
    const percentage = calculatePercentage(quizState.score, questions.length);
    const timeTaken = Math.floor((Date.now() - quizState.startTime) / 1000);
    
    return {
      score: quizState.score,
      totalQuestions: questions.length,
      percentage,
      timeTaken,
      date: new Date().toISOString()
    };
  };

  const result = quizState.quizCompleted ? getQuizResult() : null;
  const isNewHighScore = result ? result.percentage > highScore : false;

  // Update high score if needed
  useEffect(() => {
    if (result && isNewHighScore) {
      setHighScore(result.percentage);
    }
  }, [result, isNewHighScore, setHighScore]);

  if (!quizState.quizStarted) {
    return (
      <QuizStart
        onStartQuiz={startQuiz}
        totalQuestions={questions.length}
        highScore={highScore}
      />
    );
  }

  if (quizState.quizCompleted && result) {
    return (
      <Results
        result={result}
        onRestart={restartQuiz}
        isNewHighScore={isNewHighScore}
      />
    );
  }

  return (
    <Question
      question={questions[quizState.currentQuestionIndex]}
      questionNumber={quizState.currentQuestionIndex + 1}
      totalQuestions={questions.length}
      onAnswer={handleAnswer}
      timeRemaining={quizState.timeRemaining}
      onTimeUp={handleTimeUp}
    />
  );
}

export default App;