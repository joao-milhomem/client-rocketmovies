import styled from "styled-components";

export const Interface = styled.div`
  display: grid;
  grid-template-rows: 144px 1fr;
  grid-template-areas:
    "header"
    "form";

  height: 100vh;
  overflow: hidden;

  header {
    grid-area: header;

    display: flex;
    align-items: center;
    gap: 8px;

    background-color: ${({ theme }) => theme.COLORS.BG_NOTE};

    a {
      margin-left: 120px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
    }
  }
`;

export const Form = styled.form`
  grid-area: form;

  width: 340px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .profile-pic {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    margin: 0 auto -60px;
    transform: translateY(-50%);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    > svg {
      fill: ${({ theme }) => theme.COLORS.ACCENT};
    }

    label {
      cursor: pointer;
      border: 2px solid ${({ theme }) => theme.COLORS.BG_300};
      border-radius: 50%;
      background-color: ${({ theme }) => theme.COLORS.ACCENT};
      color: black;

      width: 48px;
      height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 0;
      right: -10px;
    }

    input {
      display: none;
    }
  }

  .password-wrapper {
    margin-top: 8px;
  }
`;
