import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    button {
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    h1 {
        color: #000;
    }


`;
