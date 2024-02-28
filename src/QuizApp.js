import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Question from './Question';
import Result from './Result';

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    // Add more questions as needed
  ];

  const handleAnswerSelect = (selectedOption) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = selectedOption;
    setSelectedAnswers(newSelectedAnswers);
  };

  const checkAnswer = () => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const userAnswer = selectedAnswers[currentQuestion];

    if (userAnswer === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const replayQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setScore(0);
    setShowResult(false);
  };

  return (
    <Container>
      {!showResult ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          selectedAnswer={selectedAnswers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          onCheckAnswer={checkAnswer}
        />
      ) : (
        <Result score={score} onReplay={replayQuiz} />
      )}
    </Container>
  );
}

export default QuizApp;
