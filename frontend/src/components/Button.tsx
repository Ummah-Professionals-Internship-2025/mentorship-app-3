interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "info" | "light" | "dark"; // the question mark indicates that this prop is optional
  onClick: () => void;
  type?: "button" | "submit" | "reset"; // optional prop for button type
}
const Button = ({ children, color = "danger" }: Props) => {
  return <button className={"btn btn-" + color}>{children}</button>;
};

export default Button;
