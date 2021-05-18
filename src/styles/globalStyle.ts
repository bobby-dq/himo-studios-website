import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
    }

    a, li {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

`;

/*
    font-family: 'Montserrat', sans-serif;
    font-family: 'Playfair Display', serif;
*/

/* Typical breakpoints are exactly 992px and 600px*/