import logo from "../assets/quiz-logo.png";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
};
