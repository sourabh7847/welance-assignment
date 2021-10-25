import styled from "styled-components/macro";

export const Wrapper = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 100vh;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent
      ? props.justifyContent
      : "flex-start"};

  align-items: center;
  width: 100%;
  height: max-content;
  margin: 10px 0;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Box = styled.img`
  border: 4px solid black;
  border-radius: 10px;
  width: calc(100vw - 50vw);
  max-width: 400px;
  min-width: 200px;
  height: 200px;
  object-fit: contain;
`;
