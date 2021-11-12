import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setcounties] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setcounties(data));
  }, []);
  return (
    <div className="container ">
      <div className="row">
        <h2 className="text-center m-5">
          Show All COuntries From Rest Countries Api. Found {countries.length}{" "}
          Data.
        </h2>

        {countries.map((country) => (
          <Country country={country} key={country.alpha3Code}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
