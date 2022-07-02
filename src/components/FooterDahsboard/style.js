import styled from "styled-components";

export const Container = styled.footer`
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
  justify-content: space-around;
  flex-direction: row;

  > div > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: transparent;
    color: rgb(187, 187, 187);
    font-size: 14px;
    font-family: "Roboto", sans-serif;
  }

  .active {
    color: rgb(244, 161, 93);
  }
`;
