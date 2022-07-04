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
  margin-top: 20px;

  width: 100%;

  > ul {
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    > li {
      width: 100%;
      list-style: none;
      border-bottom: rgb(204, 204, 204) solid 1px;
      padding: 18px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 5px;

        > h2 {
          color: rgb(66, 66, 66);
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: 500;
        }

        > span {
          color: rgb(66, 66, 66);
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 14px;
        }
      }

      > svg {
        color: rgb(204, 204, 204);
      }
    }
  }
`;
