import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgb(134, 41, 36);
  box-shadow: rgb(0 0 0 / 30%) 0px 2px 4px;
  position: fixed;
  top: 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  > input {
    background-color: rgb(255, 255, 255);
    border-radius: 20.5px;
    border: rgb(189, 189, 189) 1px solid;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 40px;
    width: 90%;
    max-width: 700px;
    line-height: 20px;
    outline: none;
    padding: 0 23px;
  }

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-bottom: 90px;
    margin-top: 20px;
  }
`;
