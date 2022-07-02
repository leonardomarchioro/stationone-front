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
  height: 80px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;

  > img {
    width: 100%;
    border-radius: 0 0 8px 8px;
    position: relative;
    bottom: 20px;
  }

  > div {
    width: 90%;
    background-color: rgb(255, 255, 255);
    position: relative;
    bottom: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 8px;

    > h2 {
      margin-top: 10px;
      color: rgb(66, 66, 66);
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      font-size: 20px;
    }

    > span {
      width: 90%;
      color: rgb(158, 158, 158);
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
    }

    > ul {
      width: 95%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 20px 0;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 56px;
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
