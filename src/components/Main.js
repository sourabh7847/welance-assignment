import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, BoxContainer, Wrapper } from "./styles";

const Main = () => {
  const [images, setImages] = useState([]);
  const getDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => {
        setImages([
          {
            img: res.data.message[0],
            align: "flex-start",
          },
          {
            img: res.data.message[1],
            align: "center",
          },
          {
            img: res.data.message[2],
            align: "flex-end",
          },
        ]);
      });
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <Wrapper>
      {images.map((item) => {
        return (
          <BoxContainer justifyContent={item.align}>
            <Box src={item.img} alt="" />
          </BoxContainer>
        );
      })}
    </Wrapper>
  );
};

export default Main;
