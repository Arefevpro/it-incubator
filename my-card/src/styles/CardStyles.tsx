import styled from "styled-components";
import imgBg from "../Images/Rectangle1.png"

export const Card = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  width: 300px;
  height: 350px;
`

export const CardImage = styled.img`
  /* background-image: url(${imgBg}); */
  /* margin: 10px 10px 0 10px; */
  width: 280px;
  height: 170px;
  border: 1px solid red
`