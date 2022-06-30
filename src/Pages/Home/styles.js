import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .img-container {
    width: 90%;
    height: auto;
    img {
      width: 100%;
    }
  }

  .buttons-container {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
      width: 284px;
      height: 36px;
      transition: 0.8s;

      button {
        border-color: rgba(134, 41, 36, 0.5);
        border-radius: 300px;
        border-width: 1px;
        font-size: 16px;
        color: rgb(134, 41, 36);
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        letter-spacing: 1px;
      }
      .singup-button {
        background-color: rgb(244, 161, 93);
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
          rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        color: rgb(0, 0, 0);
        gap: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 600px) {
    .img-container {
      width: 50%;
      height: auto;
    }
  }

  @media (min-width: 1024px) {
    .img-container {
      width: 512px;
      height: auto;
    }
  }
`;
