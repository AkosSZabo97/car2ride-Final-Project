import React from "react";

export function CarCards({ data }) {
  return (
    <div className="container">
      {data.map((car) => (
        <div className="card col" key={car.id}>
          <img src={car.banner.url} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{car.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
