import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

const USER_DATA = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 5.5,
  duration: 10,
};

function App() {
  const [userData, setUserData] = useState({ ...USER_DATA });

  const handleChangeInput = (key, newValue) => {
    setUserData((prevData) => {
      return { ...prevData, [key]: newValue };
    });
  };

  const annualData = calculateInvestmentResults(userData);

  return (
    <div>
      <Header />
      <main>
        <UserInput onChangeInput={handleChangeInput} inputData={userData} />
        <Result resultsData={annualData} />
      </main>
    </div>
  );
}

export default App;
