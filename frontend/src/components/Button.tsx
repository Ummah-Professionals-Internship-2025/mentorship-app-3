interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "info" | "light" | "dark"; // the question mark indicates that this prop is optional
  onClick: () => void;
}
const Button = ({ children, onClick, color = "danger" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
