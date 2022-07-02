import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px;
  border-radius: 8px;
  gap: 8px;
  padding-bottom: 8px;

  > img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  > span {
    width: 90%;
    text-align: end;
    color: rgb(66, 66, 66);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  > h3 {
    width: 90%;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: rgb(66, 66, 66);
    font-weight: 500;
  }

  > p {
    width: 90%;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: rgb(66, 66, 66);
    font-weight: 400;
  }
`;
