import React from "react";

const Country = (props) => {
  const { name, flag, capital, population } = props.country;
  console.log(props.country);
  return (
    <div className="col-md-4 p-2">
      <div className="card" style={{ width: "18rem;" }}>
        <img src={flag} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital : {capital}</li>
          <li className="list-group-item">Population : {population}</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
