import { render, screen, fireEvent } from '@testing-library/react';
import AnswerButton from '../components/AnswerButton';


test("Should fire an event when pressed", () => {
  const mockMethod = jest.fn();
  render(<AnswerButton onClick={mockMethod} />);
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(mockMethod).toHaveBeenCalled();
});

test("Button icon should be show toggleIcon is true.", () => {
  const mockToggleIcon = true;
  render(<AnswerButton toggleIcon={mockToggleIcon} />);
  const iconElement = screen.getByAltText("Check");
  expect(iconElement).toBeInTheDocument();
});