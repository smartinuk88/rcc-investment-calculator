function UserInput({ onChangeInput, inputData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChangeInput(name, value);
  };

  return (
    <form id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            onChange={handleInputChange}
            value={inputData.initialInvestment}
            type="number"
            id="initial-investment"
            name="initialInvestment"
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            onChange={handleInputChange}
            value={inputData.annualInvestment}
            type="number"
            id="annual-investment"
            name="annualInvestment"
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            onChange={handleInputChange}
            value={inputData.expectedReturn}
            type="number"
            id="expected-return"
            name="expectedReturn"
          />
        </div>
        <div>
          <label htmlFor="duration">duration</label>
          <input
            onChange={handleInputChange}
            value={inputData.duration}
            type="number"
            id="duration"
            name="duration"
          />
        </div>
      </div>
    </form>
  );
}

export default UserInput;
