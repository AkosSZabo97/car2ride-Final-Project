import React, { useEffect, useState } from "react";
import { gql } from "graphql-request";
import requestData from "../../api/requestData";
import { useParams } from "react-router-dom";
import CarPage from "./CarPage";

export default function CarInfo({ ...args }) {
  const [data, setData] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
      const { car } = await requestData(
        gql`
          query($slug: String!) {
            car(filter: { slug: { eq: $slug } }) {
              engine
              id
              style
              title
              transmission
              year
              price1
              price2
              price3
              price4
              price5
              price6
              carousel {
                url
              }
              banner {
                url
              }
            }
          }
        `,
        { slug }
      );
      setData(car);
    })();
  }, [slug]);

  return <CarPage car={data} />;
}
