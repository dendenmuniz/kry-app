import React, { useState } from "react";
import kryQuestions from "../config/questions.json";

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [showBookingButton, setShowBookingButton] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAnswerOptionClick = (answer, aScore) => {
    const nextQuestion = kryQuestions.questions[currentQuestion].next;
    let indexNextQuestion;
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
      for (var i = 0; i < nextQuestion.length; i++) {
        if (
          nextQuestion[i].max_score === undefined ||
          score <= nextQuestion[i].max_score
        ) {
          outcomeCheck(nextQuestion[i].outcome);
          setShowScore(true);
          break;
        }
      }
    } else {
      indexNextQuestion = kryQuestions.questions.findIndex(
        (question) => question.id === nextQuestion[0].next_question
      );
      setNextQuestion(indexNextQuestion);
    }
    setProgress((currentQuestion * 320) / (kryQuestions.questions.length - 1));
    setScore(score + aScore);
  };

  function handleNextQuestion() {
    if (currentQuestion < kryQuestions.questions.length - 1) {
      setCurrentQuestion(nextQuestion);
      setNextQuestion(currentQuestion + 1);
      setShowScore(false);
    }
  }
  function handlePreviousQuestion() {
    if (currentQuestion <= 0) {
      const previousQ = currentQuestion -1;
      setCurrentQuestion(previousQ);
      setNextQuestion(previousQ);
      setProgress((currentQuestion * 320) / (kryQuestions.questions.length - 1));
      setShowScore(false);
    }
  }

  function outcomeCheck(outcome) {
    console.log("outcome", outcome);
    const nextStep = kryQuestions.outcomes.find((step) => step.id === outcome);
    console.log("nextStep", nextStep);
    setMessage(nextStep.text);
    setShowBookingButton(nextStep.show_booking_button);
  }

  function bookingButton() {
    window.open("https://www.kry.se/", "_blank");
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div>
      <header>Heartburn checker</header>
      <div class="progress-container">
        <div class="progress" style={{ width: progress }}></div>
      </div>
      {showScore && kryQuestions.questions.length - 1 === currentQuestion ? (
        <>
          <div className="question-section">
            <div className="question-text">{message}</div>
            <div className="footer">
              {showBookingButton && <button onClick={() => bookingButton()}>Booking appointment</button>}
              <button onClick={() => refreshPage()}>Restart</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-text">
              {kryQuestions.questions[currentQuestion].question_text}
            </div>

            <div className="answer-section">
              {kryQuestions.questions[currentQuestion].answers.map((answer) => (
                <button
                  key={answer.id}
                  onClick={() =>
                    handleAnswerOptionClick(answer.id, answer.score)
                  }
                >
                  {answer.label}
                </button>
              ))}
            </div>
            <div className="footer">
              <button onClick={handleNextQuestion}>Next</button>
              <button onClick={handlePreviousQuestion}>Back</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Questions;
