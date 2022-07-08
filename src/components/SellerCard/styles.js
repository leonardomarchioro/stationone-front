import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 12.5px;
  border-color: rgb(245, 245, 245);
  border-width: 1px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px;

  .top {
    > h1 {
      width: 100%;
      background-color: rgb(190, 114, 48);
      border-radius: 12px 12px 0 0;
      color: rgb(255, 255, 255);
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      font-size: 18px;
      min-height: 24px;
      text-align: center;
      padding: 5px 0;
    }
    > img {
      width: 100%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 5px;
      gap: 10px;

      > svg {
        width: 30px;
        cursor: pointer;
      }

      > span {
        color: rgb(66, 66, 66);
        font-family: "Roboto", sans-serif;
        font-size: 13px;
        font-weight: 500;
        min-height: 16px;
        text-align: left;
      }
    }
    > p {
      color: rgb(66, 66, 66);
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 12px;
      min-height: 17px;
      text-align: left;
      padding: 8px;
    }
  }

  div > button {
    background-color: rgb(244, 161, 93);
    border-radius: 300px;
    padding: 0 16px;
    height: 36px;
    border: transparent;
    margin-bottom: 15px;
    color: rgb(0, 0, 0);
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
