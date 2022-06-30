import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  .top-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;
    width: 90%;

    > header {
      display: flex;
      align-items: center;
      gap: 2px;

      > h1 {
        margin: 0.125rem;
        font-family: "Roboto", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: rgb(0, 0, 0);
        text-align: center;
      }
    }

    > main {
      width: 90%;
      height: 60%;

      > form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-evenly;

        > div {
          margin-bottom: 8px;
        }

        div > button {
          width: 100%;
          height: 39.6px;
          background-color: rgb(244, 161, 93);
          border-color: transparent;
          border-radius: 300px;
          opacity: 1;
          color: rgb(255, 255, 255);
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          letter-spacing: 1px;
          transition: 0.8s;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      div > button {
        border: transparent;
        color: rgb(153, 153, 153);
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        letter-spacing: 1px;
        height: 36px;
        width: 100%;
      }
    }

    .none-svg > form > div > svg {
      display: none;
    }
  }

  > footer {
    margin-bottom: 5%;
    width: 85%;

    div > button {
      border-color: rgba(153, 153, 153, 0.23);
      border-radius: 300px;
      border-width: 1px;
      color: rgb(153, 153, 153);
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      height: 36px;
      width: 100%;
      transition: 0.8s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 768px) {
    .top-container {
      max-width: 700px;
    }
    > footer {
      max-width: 700px;
    }
  } ;
`;
