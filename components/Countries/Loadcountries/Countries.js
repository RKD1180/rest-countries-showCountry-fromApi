import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Showcountry from "../Showcountry/Showcountry";

const Country = () => {
  const [countrys, setcountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setcountry(data));
  }, []);
  return (
    <div>
      <h2>All Country Details</h2>
      {countrys.map((country) => (
        <Showcountry country={country}></Showcountry>
      ))}
    </div>
  );
};

export default Country;
