import checked from "../assets/icons/check-mark.png";

export default function AnswerButton({ onClick, toggleList, label }) {
  const icon = toggleList ? checked : null;
  return (
    <button onClick={onClick} className="answer-button">
      {label}
      <span className="answer-button-span">
      {icon &&
      <img src={icon} alt="Check" className="icon" width="18px" height="18px" />
       }
      </span>
       
    </button>
  );
}