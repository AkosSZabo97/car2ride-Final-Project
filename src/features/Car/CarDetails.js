import { gql } from "graphql-request";
import React, { useEffect, useState } from "react";
import requestData from "../../api/requestData";
import { CarCards } from "./CarCards";

export default function CarDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await requestData(gql`
        query {
          allCars {
            id
            style
            title
            year
            engine
            slug
            transmission
            price1
            price2
            price3
            price4
            price5
            price6
            banner {
              url
            }
            carousel {
              url
            }
          }
        }
      `);
      setData(data.allCars);
    })();
  }, []);

  return <CarCards data={data} />;
}
