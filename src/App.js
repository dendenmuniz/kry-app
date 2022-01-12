import React, { useState } from "react";
import kryQuestions from "./config/questions.json";
import "./App.css";


const json = {
  "type": "object",
  "questions": [{
    "id": { "type": "string" },
    "question_text": { "type": "string" },
    "answers": { "enum": [ {"id": "string", "label": "string", "score": "integer"}] },
    "next": { "enum": [ {"next_question": "string", "answered": "string", "outcome": "string", "max_score": "integer"}] }
  }],
  "required": ["id", "question_text", "answers", "next"]
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [showBookingButton, setShowBookingButton] = useState(false);

  const handleAnswerOptionClick = (answer, aScore) => {
    const nextQuestion = kryQuestions.questions[currentQuestion].next;
    
    setScore(score + aScore);

    const indexNextQuestion = nextQuestion.map((nextMove) => {
      if (nextMove.length === 1) {
        return nextMove.next_question;
      } else if (nextMove.answered === answer) {
        return (kryQuestions.questions.findIndex(
          (question) => question.id === nextMove.next_question
        ));
      } else {
        outcomeCheck(nextQuestion);
        setShowScore(true);
        return -1;
      }
    });
    setCurrentQuestion(indexNextQuestion);
  };

  function handleNextQuestion() {
    setCurrentQuestion(nextQuestion);
    setNextQuestion(0);
    setShowScore(false);
  }

  function outcomeCheck(outcomes) {

   const nextStep = outcomes.map((nextStep) => {
      if(nextStep.length === 1 && nextStep.outcome) {
        return nextStep.outcome;
      } else if (nextStep.max_score <= score) {
        setShowBookingButton(true);
        return nextStep.outcome;
      }
    });
    setMessage(nextStep);
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          {score}
          {message}
          {showBookingButton && <button>booking appoitment</button>}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{kryQuestions.length}
            </div>
            <div className="question-text">
              {kryQuestions.questions[currentQuestion].question_text}
            </div>

            <div className="answer-section">
              {kryQuestions.questions[currentQuestion].answers.map((answer) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answer.id, answer.score)
                  }
                >
                  {" "}
                  {answer.label}
                </button>
              ))}
            </div>
            <button onClick={handleNextQuestion}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
