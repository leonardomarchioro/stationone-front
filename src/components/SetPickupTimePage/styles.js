import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 56px;
  background-color: rgb(134, 41, 36);
  box-shadow: rgb(0 0 0 / 30%) 0px 2px 4px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;

  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    position: relative;
    top: 15px;

    > svg {
      color: rgb(255, 255, 255);
      margin: 5px;
      cursor: pointer;
    }
  }

  > h1 {
    text-align: center;
    color: rgb(255, 255, 255);
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 20px;
    position: relative;
    bottom: 15px;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  > div {
    width: 80%;

    > span,
    label {
      color: rgb(155, 155, 155);
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 14px;
    }

    > p {
      color: rgb(0, 0, 0);
      font-size: 16px;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
    }

    > input {
      border: 1px solid rgb(244, 161, 93);
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 84px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  background-color: rgb(255, 255, 255);
  border-top-color: rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 80%;
    max-width: 700px;
    height: 36px;
    > button {
      border: transparent;
      background-color: rgb(244, 161, 93);
      border-radius: 300px;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
        rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
      color: rgb(0 0 0);
      letter-spacing: 1px;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;
