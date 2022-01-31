import React, { useState } from "react";
import kryQuestions from "../config/questions.json";
import AnswerButton from "./AnswerButton";
import Label from "./Label";

function Questions() {
  let previousAnswered = [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [previousQuestion, setPreviousQuestion] = useState(previousAnswered);
  const [showOutcome, setShowOutcome] = useState(false);
  const [score, setScore] = useState(0);
  const [advice, setAdvice] = useState({
    id: "",
    text: "",
    show_booking_button: false,
  });
  const [progress, setProgress] = useState(0);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState({
    answered: "",
    score: 0,
  });

  function handleAnswerOptionClick(answer, aScore) {
    setToggleIcon(true);
    setCurrentAnswer({ answered: answer, score: aScore });
    const nextQ = kryQuestions.questions[currentQuestion].next;
    let indexNextQuestion;
    if (
      nextQ.length > 1 &&
      kryQuestions.questions.length - 1 !== currentQuestion
    ) {
      let nextId = nextQ.find((answers) => answers.answered === answer);
      indexNextQuestion = kryQuestions.questions.findIndex(
        (question) => question.id === nextId.next_question
      );
      setNextQuestion(indexNextQuestion);
    } else if (
      nextQ.length > 1 &&
      kryQuestions.questions.length - 1 === currentQuestion
    ) {
      for (var i = 0; i < nextQ.length; i++) {
        if (nextQ[i].max_score === undefined || score <= nextQ[i].max_score) {
          outcomeCheck(nextQ[i].outcome);
          break;
        }
      }
    } else {
      indexNextQuestion = kryQuestions.questions.findIndex(
        (question) => question.id === nextQ[0].next_question
      );
      setNextQuestion(indexNextQuestion);
    }
  }

  function handleNextQuestion() {
    if (
      currentQuestion !== nextQuestion ||
      kryQuestions.questions.length - 1 === currentQuestion
    ) {
      setPreviousQuestion((previousAnswered) => [
        ...previousAnswered,
        {
          question: currentQuestion,
          answer: currentAnswer.answered,
          score: currentAnswer.score,
        },
      ]);
      console.log("previous on next", previousQuestion);
      setProgress(
        ((currentQuestion + 1) * 320) / kryQuestions.questions.length
      );
      setScore(score + currentAnswer.score);
      console.log("score", score);
      if (currentQuestion < kryQuestions.questions.length - 1) {
        setCurrentQuestion(nextQuestion);
        setShowOutcome(false);
      } else {
        setShowOutcome(true);
      }
    }
  }
  function handlePreviousQuestion() {
    console.log("previous on back bve", previousQuestion);
    if (previousQuestion.length > 0) {
      setCurrentQuestion(
        previousQuestion[[previousQuestion.length - 1]].question
      );
      setPreviousQuestion((previousAnswered) => {
        const prev = [...previousAnswered];
        prev.pop();
        return prev;
      });
    } else {
      setCurrentQuestion(0);
      setPreviousQuestion([]);
    }
    setScore(score - previousQuestion[[previousQuestion.length - 1]].score);
    setProgress(((currentQuestion - 1) * 320) / kryQuestions.questions.length);
    setShowOutcome(false);
  }

  function outcomeCheck(outcome) {
    const nextStep = kryQuestions.outcomes.find((step) => step.id === outcome);
    console.log("nextStep", nextStep);
    setAdvice({
      id: nextStep.id,
      text: nextStep.text,
      show_booking_button: nextStep.show_booking_button,
    });
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
      <div className="progress-container">
        <div className="progress" style={{ width: progress }}></div>
      </div>
      {showOutcome && kryQuestions.questions.length - 1 === currentQuestion ? (
        <>
          <div id="Outcome" className="question-section">
            <Label text={advice.text} key={advice.id} />
            <div className="footer">
              {advice.show_booking_button && (
                <button onClick={() => bookingButton()}>
                  Booking appointment
                </button>
              )}
              <button onClick={() => refreshPage()}>Restart</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="Question" className="question-section">
            <Label
              key={kryQuestions.questions[currentQuestion].id}
              text={
                kryQuestions.questions[currentQuestion].question_text
              }
            />
          
            <div className="answer-section">
              {kryQuestions.questions[currentQuestion].answers.map((answer) => (
                <AnswerButton
                  key={answer.id}
                  toggleList={toggleIcon}
                  label={answer.label}
                  onClick={() =>
                    handleAnswerOptionClick(answer.id, answer.score)
                  }
                />
              ))}
            </div>
            <div className="footer">
              <button onClick={handleNextQuestion}>Next</button>
              {currentQuestion >= 1 && (
                <button onClick={handlePreviousQuestion}>Back</button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Questions;
