import styled from "styled-components";

export const ContainerModal = styled.section`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  z-index: 9999999;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding-top: 10%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  z-index: 9999999;

  > form {
    width: 80%;
    max-width: 700px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > div > button {
      background-color: rgb(134, 41, 36);
      border: transparent;
      border-radius: 300px;
      height: 39.6px;
      opacity: 1;
      color: rgb(255, 255, 255);
      font-weight: 400;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      transition: 0.8s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  > div > button {
    margin-top: 20px;
    border: transparent;
    color: rgb(153, 153, 153);
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    height: 36px;
    width: 100%;
  }
`;
