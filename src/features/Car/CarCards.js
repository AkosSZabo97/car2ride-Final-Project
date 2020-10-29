import React from "react";
import { Link } from "react-router-dom";
import "../../components/Styles/cardsImg.css";
// import { createData } from "../../api/createData";

export function CarCards({ data }) {
  return (
    <div className="card-deck row-cols-1 row-cols-md-3 w-100">
      {data.map((car) => (
        <div className="mb-2 p-5">
          <div className="card col cardCards" key={car.id}>
            <img
              src={car.banner.url}
              className="card-img-top carWidth pt-4"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title">{car.title}</h5>
              <ul>
                <li>Year: {car.year}</li>
                <li>{car.style}</li>
                <li>Engine: {car.engine}</li>
                <li>Transmission: {car.transmission}</li>
              </ul>
              <Link
                to={{ pathname: `/car/${car.slug}`, state: { slug: car.slug } }}
                className="btn btn-secondary btn-lg btn-block"
              >
                More Info
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
