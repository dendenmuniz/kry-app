function ButtonComponent({
  label,
  onClick,
  className = "button-answer",
  type = "button",
  checked = false,
}) {
  return (
    <button className={className} onClick={onClick} type={type}>
      <span className="mt-1">{label}</span>
      {checked && <i class="icon" aria-hidden="true"></i>}
    </button>
  );
}

export const Button = ButtonComponent;
