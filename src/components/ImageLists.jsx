import { useEffect, useState } from "react";

import Styled from "styled-components/macro";

import { api } from "../services/api/api";

const DogWrapper = Styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-top: 4rem;
`;

const ContainerImage = Styled.div`
    min-width: 320px;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 1rem;

    img{
        width: 100%;
        max-width: 320px;
        height: 300px;

        object-fit: cover;
    }

`;

export function ImageLists({ RequestCount }) {
  const [InitialDogsImages, setInitialDogsImages] = useState([]);

  // Make Request
  useEffect(() => {
    async function fetchData() {
      let ReqData = await api
        .get("/api/breeds/image/random/50")
        .then((response) => response.data.message)
        .catch((error) => console.log(error));

      ReqData.shift();
      ReqData.shift();

      setInitialDogsImages(ReqData);
    }

    fetchData();
  }, []);

  return (
    <DogWrapper>
      {InitialDogsImages?.length > 0 &&
        InitialDogsImages.map((Item) => {
          return (
            <ContainerImage>
              <img src={Item} loading="lazy" />
            </ContainerImage>
          );
        })}
    </DogWrapper>
  );
}
