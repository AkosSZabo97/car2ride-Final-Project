import React, { useEffect, useState } from "react";
import { gql } from "graphql-request";
import requestData from "../../api/requestData";
import { useParams } from "react-router-dom";
import VanPage from "./VanPage";

export default function VanInfo({ ...args }) {
  const [data, setData] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
      const { van } = await requestData(
        gql`
          query($slug: String!) {
            van(filter: { slug: { eq: $slug } }) {
              engine
              id
              style
              title
              transmission
              year
              seat
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
        `,
        { slug }
      );
      setData(van);
    })();
  }, [slug]);

  return <VanPage van={data} />;
}
