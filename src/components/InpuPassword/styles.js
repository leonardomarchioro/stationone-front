import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 78px;

  > label {
    width: 100%;
    color: rgb(66, 66, 66);
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 6px;
  }

  > input {
    width: 100%;
    height: 40px;
    font-family: "Roboto", sans-serif;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${(props) =>
      props.error ? "#ba0303" : "rgb(221, 221, 221)"};
    padding: 5px 8px;
  }
  > svg {
    align-self: flex-end;
    margin-right: 8px;
    position: relative;
    top: -23px;
  }

  > div {
    height: 10px;
    position: relative;
    top: -13px;

    > span {
      font-size: 12px;
      color: #ba0303;
    }
  }
`;
