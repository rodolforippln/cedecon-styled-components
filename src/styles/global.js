import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-v9-latin-regular.woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  body {
    font-family: 'Poppins';
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    color: #677788;  
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;  
    color: #1e2022;  
  }
`

export default GlobalStyle


