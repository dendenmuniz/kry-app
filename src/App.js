import React, { useState } from "react";
import kryQuestions from "./config/questions.json";
import "./App.css";
import Questions from "./components/Questions";

function App() {
  /* const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [showBookingButton, setShowBookingButton] = useState(false);

  const handleAnswerOptionClick = (answer, aScore) => {
    const nextQuestion = kryQuestions.questions[currentQuestion].next;
    let indexNextQuestion;
    console.log("length", nextQuestion.length);
    console.log("nextQuestion", nextQuestion);
    console.log(kryQuestions.questions.length);
    console.log("current", currentQuestion);
    if (
      nextQuestion.length > 1 &&
      kryQuestions.questions.length - 1 !== currentQuestion
    ) {
      let nextId = nextQuestion.find((answers) => answers.answered === answer);
      indexNextQuestion = kryQuestions.questions.findIndex(
        (question) => question.id === nextId.next_question
      );
      setNextQuestion(indexNextQuestion);
    } else if (
      nextQuestion.length > 1 &&
      kryQuestions.questions.length - 1 === currentQuestion
    ) {
      console.log("outcome");
      console.log(nextQuestion.max_score <= score);
      for (var i = 0; i < nextQuestion.length; i++) {
        if(nextQuestion[i].max_score === undefined || score <= nextQuestion[i].max_score) {
          outcomeCheck(nextQuestion[i].outcome)
          setShowScore(true);
          break;
          }
      }
      
    } else {
      indexNextQuestion = kryQuestions.questions.findIndex(
        (question) => question.id === nextQuestion[0].next_question
      );
      console.log(indexNextQuestion);
      setNextQuestion(indexNextQuestion);
    }

    setScore(score + aScore);
    console.log("score", score);
  };

  function handleNextQuestion() {
    if (currentQuestion < kryQuestions.questions.length - 1) {
      setCurrentQuestion(nextQuestion);
      setNextQuestion(currentQuestion + 1);
      setShowScore(false);
    }
  }

  function outcomeCheck(outcome) {
    console.log("outcome", outcome);
    const nextStep = kryQuestions.outcomes.find(
      step => step.id === outcome
    );
    console.log("nextStep", nextStep);
    setMessage(nextStep.text);
    setShowBookingButton(nextStep.show_booking_button);
  } */

  return (
    <div className="app">
      <Questions />
    </div>
  );
}

export default App;
