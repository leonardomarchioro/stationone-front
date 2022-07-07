import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Orders = styled.ul`
  width: 100%;
  max-height: 635px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  list-style: none;
  overflow-y: scroll;

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5px;

    border-bottom: rgb(66, 66, 66) 1px solid;
    padding: 10px 0;

    > h2 {
      color: rgb(66, 66, 66);
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-weight: 600;
      width: 100%;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
      > span {
        color: rgb(66, 66, 66);
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: 400;
        width: 80%;
      }
    }

    .subtotal {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      > h3 {
        color: rgb(66, 66, 66);
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;

export const Products = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;

  > li {
    padding: 10px;
    background-color: rgb(226 228 228);
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    > span {
      color: rgb(66, 66, 66);
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-weight: 500;
    }
    > div {
      width: 1005;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > span {
        color: rgb(66, 66, 66);
        font-family: "Roboto", sans-serif;
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
`;
