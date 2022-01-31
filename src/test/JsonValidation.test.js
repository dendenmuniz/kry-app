import JsonValidation from "../components/JsonValidation";

test("valid json", () => {
  const mockData = {
    questions: [
      {
        id: "test",
        question_text: "question text",
        answers: [
          { id: "question_1_yes", label: "Yes", score: 5 },
          { id: "question_1__no", label: "No", score: 0 },
        ],
        next: [
          {
            answered: "question_1_yes",
            next_question: "test_2",
          },
          {
            answered: "question_1_no",
            next_question: "test_3",
          },
        ],
      },
      {
        id: "test_2",
        question_text: "question text 2",
        answers: [
          {
            id: "question_2_yes",
            label: "Yes",
            score: 0,
          },
          { id: "question_2_no", label: "No", score: 0 },
        ],
        next: [{ next_question: "test_3" }],
      },
      {
        id: "test_3",
        question_text: "question text 3",
        answers: [
          { id: "question_3_yes", label: "Yes", score: 25 },
          { id: "question_3_no", label: "No", score: 0 },
        ],
        next: [
          { max_score: 5, outcome: "rest_and_come_back_later" },
          { max_score: 49, outcome: "see_a_doctor" },
          { outcome: "go_to_emergency_room" },
        ],
      },
    ],
    outcomes: [
      {
        id: "rest_and_come_back_later",
        text: "Take a rest and come back later",
        show_booking_button: false,
      },
    ],
  };
  const valid = () => {
    JsonValidation(mockData);
  };
  valid();
  expect(valid).toBeTruthy();
});
