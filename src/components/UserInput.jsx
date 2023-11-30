function UserInput({ onChangeInput, inputData }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            onChange={(e) => onChangeInput("initalInvestment", e.target.value)}
            value={inputData.initialInvestment}
            type="number"
            id="initial-investment"
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
            value={inputData.annualInvestment}
            type="number"
            id="annual-investment"
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
            value={inputData.expectedReturn}
            type="number"
            id="expected-return"
            required
          />
        </p>
        <p>
          <label htmlFor="duration">duration</label>
          <input
            onChange={(e) => onChangeInput("duration", e.target.value)}
            value={inputData.duration}
            type="number"
            id="duration"
            required
          />
        </p>
      </div>
    </form>
  );
}

export default UserInput;
