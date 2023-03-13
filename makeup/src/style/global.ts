import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body{
    margin: 0;
    padding: 0;
    background-color:black ;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  body, input, select, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }
`
