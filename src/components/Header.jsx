import headerImg from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={headerImg} alt="Calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
