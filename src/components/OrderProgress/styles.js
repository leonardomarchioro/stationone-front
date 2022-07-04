import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 62px;
  background-color: rgb(245, 245, 245);

  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 256px;
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      width: 84px;
      height: 31px;
      border-radius: 62px;
      background-color: rgb(224, 224, 224);
      border-color: rgb(153, 153, 153);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(66, 66, 66);
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      z-index: 1;
    }
    > div {
      background-color: rgb(224, 224, 224);
      border-color: rgb(153, 153, 153);
      height: 9px;
      margin: -1px;
    }
  }
  .one {
    span:nth-child(1) {
      background-color: rgb(255, 255, 255);
      border: rgb(244, 161, 93) 3px solid;
      width: 74px;
    }
  }

  .two {
    span:nth-child(1) {
      background-color: rgb(244, 161, 93);
    }
    div:nth-child(2) {
      background-color: rgb(244, 161, 93);
    }
    span:nth-child(3) {
      background-color: rgb(255, 255, 255);
      border: rgb(244, 161, 93) 3px solid;
      width: 74px;
    }
  }

  .three {
    span {
      background-color: rgb(244, 161, 93);
    }
    div {
      background-color: rgb(244, 161, 93);
    }

    span:nth-child(5) {
      background-color: rgb(255, 255, 255);
      border: rgb(244, 161, 93) 3px solid;
      width: 74px;
    }
  }
`;
