import React from "react";
import { Link } from "react-router-dom";
import "../../components/Styles/cardsImg.css";

export function VanCards({ data }) {
  return (
    <div className="card-deck p-3 row-cols-1 row-cols-md-3 w-100">
      {data.map((van) => (
        <div className="mb-2 p-4">
          <div className="card col cardCards" key={van.id}>
            <img
              src={van.banner.url}
              className="card-img-top pt-4"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title">{van.title}</h5>
              <ul>
                <li>Year: {van.year}</li>
                <li>{van.style}</li>
                <li>Engine: {van.engine}</li>
                <li>Transmission: {van.transmission}</li>
                <li>Seats: {van.seat}</li>
              </ul>
              <Link
                to={{ pathname: `/van/${van.slug}`, state: { slug: van.slug } }}
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
