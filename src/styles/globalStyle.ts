import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thick;
        scrollbar-color: #43A498 transparent;
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar {
        width: 0.5rem;
    }

    *::-webkit-scrollbar-track {
        background: #EAE8DA;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #43A498;
        border: transparent;
        cursor: pointer;
    }

    *::-moz-scrollbar-thumb {
        background-color: #43A498;
        border: transparent;
    }

    html {
        overflow-x: hidden;
        font-size: 62.5%;

        @media (max-width: 992px) {
            font-size: 50%;
        }
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