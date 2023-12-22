import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    ::-webkit-scrollbar {
      width: 6px;
      
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.COLORS.ACCENT};
    }

    ::-webkit-scrollbar-track {
      background: #ededed;
      margin: 12px;
      border-radius: 10px;
    }
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BG_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  body, input, button , textarea, select, fieldset {
    font-family: 'Roboto Slab', serif;
    border :none ;
  }

  input,button {
    background: none;
  }

  textarea {
    outline: none;
  }

  a{
    text-decoration: none;
    color:${({ theme }) => theme.COLORS.ACCENT}
  }

  a:hover, button:hover, input[type = "button"]:hover{
    cursor: pointer;
    filter: brightness(.9);
  }
`;
