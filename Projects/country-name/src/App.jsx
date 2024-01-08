import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respose = await fetch(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/country.json"
        );
        const data = await respose.json();
        const value = Object.values(data);
        console.log(value);
        setCountries(value);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1>Country Table</h1>
            <table className="table table table-striped">
              <thead>
                <tr>
                  <th scope="col">Country Name</th>
                  <th scope="col">Country ISO3</th>
                  <th scope="col">Country ISO Numeric</th>
                  <th scope="col">Currency Name</th>
                  <th scope="col">Currency Code</th>
                  <th scope="col">Currency Number</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country, id) => {
                  return (
                    <tr key={id}>
                      <td>{country.country_name}</td>
                      <td>{country.country_iso3}</td>
                      <td>{country.country_iso_numeric}</td>
                      <td>{country.currency_name}</td>
                      <td>{country.currency_code}</td>
                      <td>{country.currency_number}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
