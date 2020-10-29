// import { database } from "firebase";
import React from "react";
import { Link } from "react-router-dom";
import "../../components/Styles/cardsImg.css";

export default function CarPage({ car }) {
  if (Object.keys(car).length === 0) return null;
  console.log(car);
  return (
    <div className="container">
      <h1 className="pt-5">{car.title}</h1>
      <div className="row pt-5">
        <div className="col">
          <div>
            <img src={car.banner.url} alt="" className="card-img-top" />
          </div>
        </div>
        <div className="col pl-5">
          <div className="d-block"></div>
          <div className="row border border-secondary p-auto rounded-lg">
            <div className="col">
              <h2 className="border-bottom border-secondary d-inline">
                Info About
              </h2>
              <div className="pt-3">
                <ul className="pt-3">
                  <li>Year: {car.year}</li>
                  <li>Car body: {car.style}</li>
                  <li>Engine: {car.engine}</li>
                  <li>Transmission: {car.transmission}</li>
                </ul>
              </div>
            </div>
            <div className="col pt-4">
              <div className="pt-5">
                <ul>
                  <li>Seats: 5</li>
                  <li>AC: Yes</li>
                  <li>Navigation: Yes</li>
                  <li>Parking Sensor: Yes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <table className="table table-bordered table-secondary">
              <thead>
                <tr>
                  <th>0-1 Days</th>
                  <th>2-3 Days</th>
                  <th>4-7 Days</th>
                  <th>8-14 Days</th>
                  <th>15-30 Days</th>
                  <th>+30 Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{car.price1} €/day</th>
                  <th>{car.price2} €/day</th>
                  <th>{car.price3} €/day</th>
                  <th>{car.price4} €/day</th>
                  <th>
                    {car.price5} <br></br>€/day
                  </th>
                  <th>{car.price6} €/day</th>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/contact" className="btn btn-secondary btn-lg btn-block">
            Go To Book
          </Link>
        </div>
      </div>
    </div>
  );
}
