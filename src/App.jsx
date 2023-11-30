import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

const USER_DATA = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 5.5,
  duration: 10,
};

function App() {
  const [userData, setUserData] = useState({ ...USER_DATA });

  const inputIsValid = userData.duration >= 1;

  const handleChangeInput = (key, newValue) => {
    setUserData((prevData) => {
      return { ...prevData, [key]: +newValue };
    });
  };

  return (
    <>
      <Header />
      <main>
        <UserInput onChangeInput={handleChangeInput} inputData={userData} />
        {!inputIsValid && <p className="center">No duration entered</p>}
        {inputIsValid && <Results userData={userData} />}
      </main>
    </>
  );
}

export default App;
