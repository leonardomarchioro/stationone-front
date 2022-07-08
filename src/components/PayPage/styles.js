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
        cursor: pointer;
      }
    }
  }

  > div {
    margin-top: 20px;
  }

  .infos-payment {
    width: 100%;

    > div:nth-child(1) {
      padding: 0 10%;
    }

    .priceInfos {
      background-color: rgb(245, 245, 245);
      padding: 12px 10%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: space-around;

      > h2 {
        width: 100%;
        color: rgb(0, 0, 0);
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        margin-bottom: 6px;
      }

      > div {
        display: flex;
        justify-content: space-between;
        width: 100%;

        > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;

          span {
            color: rgb(143, 143, 143);
            padding: 0 5%;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 13px;
          }

          h3 {
            color: rgb(0, 0, 0);
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            font-size: 14px;
          }
        }
      }
    }

    .subtotal {
      background-color: rgb(245, 245, 245);
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: space-around;
      padding: 12px 10%;

      span {
        color: rgb(143, 143, 143);
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 13px;
      }

      h2 {
        color: rgb(0, 0, 0);
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 20px;
      }
    }
  }

  .credit-card {
    width: 90%;
    padding: 0 10%;
    > h2 {
      color: rgb(0, 0, 0);
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 20px;
    }
  }

  > .buttons {
    width: 90%;
    max-width: 700px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
      width: 100%;

      .cancel-button {
        box-shadow: rgb(0 0 0 / 15%) 0px 2.4px 4px;
        width: 100%;
        max-width: 700px;
        border-color: rgba(158, 158, 158, 0.23);
        color: rgb(158, 158, 158);
        height: 36px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .payment-button {
        background-color: rgb(244, 161, 93);
        border: transparent;
        box-shadow: rgb(0 0 0 / 15%) 0px 2.4px 4px;
        width: 100%;
        max-width: 700px;
        color: rgba(0, 0, 0, 0.87);
        height: 36px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;
