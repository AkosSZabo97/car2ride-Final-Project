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
            mark
            title
            year
            engine
            banner {
              url
            }
          }
        }
      `);
      setData(data.allCars);
    })();
  }, []);

  console.log(data);

  return <CarCards data={data} />;
}
