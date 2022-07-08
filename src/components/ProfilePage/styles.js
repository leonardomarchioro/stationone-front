import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.header`
  width: 100%;
  height: 56px;
  background-color: rgb(134, 41, 36);
  box-shadow: rgb(0 0 0 / 30%) 0px 2px 4px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  z-index: 10;
  padding: 0 20px;

  > svg {
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 26px;
  }

  > img {
    width: 80%;
    max-width: 300px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    > span {
      color: rgb(155, 155, 155);
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 14px;
      margin-top: 10px;
    }
    > h3 {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`;
