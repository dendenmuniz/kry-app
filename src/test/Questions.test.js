import { render, screen, fireEvent } from "@testing-library/react";
import Questions from "../components/Questions";
import Label from "../components/Label";
import mockData from "../config/questions.json";


const DEFAULT_PROPS = {
  questions: mockData.questions,
  outcomes: mockData.outcomes,
};

test("renders learn react link", () => {
  render(<Questions />);
  const linkElement = screen.getByText(/Heartburn checker/);
  expect(linkElement).toBeInTheDocument();
});

test("render answer options", () => {
  render(<Questions />);
  expect(
    screen.getByText(DEFAULT_PROPS.questions[0].answers[0].label)
  ).toBeInTheDocument();
  expect(
    screen.getByText(DEFAULT_PROPS.questions[0].answers[1].label)
  ).toBeInTheDocument();
});
