import { gql } from "graphql-request";
import React, { useEffect, useState } from "react";
import requestData from "../../api/requestData";
import { VanCards } from "./VanCards";

export default function VanDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await requestData(gql`
        query {
          allVans {
            title
            id
            year
            transmission
            engine
            slug
            seat
            style
            price1
            price2
            price3
            price4
            price5
            price6
            banner {
              url
            }
          }
        }
      `);
      setData(data.allVans);
    })();
  }, []);

  return <VanCards data={data} />;
}
