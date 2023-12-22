import styled from "styled-components";

export const Interface = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "form wallpaper";

  height: 100vh;
  overflow: hidden;

  .wallpaper {
    grid-area: wallpaper;
    position: relative;
    height: 100vh;

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.COLORS.BG_400};
      opacity: 0.5;
    }

    img {
      width: 100%;
      background-size: cover;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  place-content: center;

  padding-inline: 124px;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    margin-bottom: 48px;
  }

  fieldset {
    text-align: center;

    legend {
      font-size: 24px;
      margin-bottom: 48px;
      text-align: start;
    }

    > a:last-child {
      margin-top: 42px;
      display: inline-block;
    }
  }
`;

export const Wallpaper = styled.div`
`