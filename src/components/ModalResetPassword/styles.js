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
  justify-content: center;

  > div {
    width: 90%;
    max-width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
      width: 100%;
      font-family: "Roboto", sans-serif;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    p {
      color: rgb(119, 119, 119);
      white-space: pre-wrap;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      margin-bottom: 32px;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;

      div > button {
        width: 100%;
        height: 39.6px;
        background-color: rgb(244, 161, 93);
        border-color: transparent;
        border-radius: 4px;
        opacity: 1;
        color: rgb(0, 0, 0);
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        letter-spacing: 1px;
        transition: 0.8s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .button-cancel {
      border: transparent;
      color: rgb(153, 153, 153);
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      height: 36px;
      width: 100%;
      margin-top: 10px;
    }
  }
`;
