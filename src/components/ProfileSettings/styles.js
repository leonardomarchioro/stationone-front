import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;

  img {
    width: 200px;
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    > div {
      width: 100%;
      max-width: 700px;
    }

    > div > button {
      background-color: rgb(244, 161, 93);
      border: transparent;
      border-radius: 300px;
      height: 39.6px;
      width: 100%;
      max-width: 700px;
      opacity: 1;
      color: rgb(255, 255, 255);
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 14px;
    }
  }

  svg {
    cursor: pointer;
  }

  > div > button {
    margin-top: 10px;
    border: transparent;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    color: rgb(134, 41, 36);
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;
