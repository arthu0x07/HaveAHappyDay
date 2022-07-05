import { useState } from "react";
import Styled from "styled-components/macro";

import { ImageLists } from "../components/ImageLists";

const StartMessage = Styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1366px;
    margin: 0 auto;
    
    h1{
        margin-top: 4rem;
        font-size: 32px;
        position: relative;

        ::after {
            content: ' ';
            position: absolute;
            right: -10px;

            height: 100%;
            width: 4px;
            background-color: #424242;

            animation: pulse 0.8s alternate infinite ease;
        }
    }

    p{
        font-size: 20px;
        margin-top: 2rem;
        font-style: italic;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
    }

    @keyframes pulse {
        from{
            opacity: 0
        }

        to{
            opacity: 1;
        }
    }
`;

const ButtonMore = Styled.button`
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 0.6rem 1.5rem;

    background-color: #67c867;
    border: 1px solid #f2f2f2;
    border-radius: 3px;
    cursor: pointer;
    font-size: 32px;

    opacity: 0.8;

    :hover{
        opacity: 1.2
    }
`;

export function Home() {
  const [ListImageListComponent, setListImageListComponent] = useState([]);

  function AddComponent(event) {
    event.preventDefault();

    setListImageListComponent(() => [
      ...ListImageListComponent,
      <ImageLists />,
    ]);
  }

  return (
    <StartMessage>
      <h1>Hello my friend </h1>
      <p>
        This is my way to improve your tiring day, stay two minutes and leave
        feeling refreshed.
      </p>
      <ImageLists />
      {ListImageListComponent}
      <ButtonMore onClick={AddComponent}>+</ButtonMore>
    </StartMessage>
  );
}
