import { formatter } from "../util/investment";

function Result({ resultsData }) {
  const formattedResults = resultsData.forEach((result) =>
    Object.values(result)
  );
  console.log(formattedResults);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.annualInvestment + row.interest}</td>
            <td>{row.interest}</td>
            <td>{row.valueEndOfYear}</td>
            <td>{row.annualInvestment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
