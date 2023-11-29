import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

const USER_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [userData, setUserData] = useState({ ...USER_DATA });

  const handleChangeInput = (name, value) => {
    setUserData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <div>
      <Header />
      <main>
        <UserInput onChangeInput={handleChangeInput} inputData={userData} />
        <Result />
      </main>
    </div>
  );
}

export default App;
