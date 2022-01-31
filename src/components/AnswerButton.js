import checked from "../assets/icons/check-mark.png";

export default function AnswerButton({ onClick, toggleIcon, label }) {
  const icon = toggleIcon ? checked : null; 
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