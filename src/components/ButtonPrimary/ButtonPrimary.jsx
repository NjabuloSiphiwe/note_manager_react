import s from "./style.module.css";
export function ButtonPrimary({
  className,
  children,
  onClick,
  isDisabled,
  type,
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      className={`btn btn-primary ${s.button} ${className}`}
    >
      {children}
    </button>
  );
}
