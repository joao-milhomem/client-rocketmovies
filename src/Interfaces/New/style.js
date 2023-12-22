import styled from "styled-components";

export const Interface = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "form";
  height: 100vh;
  overflow: none;
`;

export const Form = styled.form`
  width: 1120px;
  margin: 0 auto;

  margin-top: 50px;
  padding-right: 12px;

  grid-area: form;
  overflow-y: auto;

  > a {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 24px;
    width: min-content;

    svg {
      font-size: 16px;
    }
  }

  fieldset {
    legend {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 40px;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      gap: 56px;

      margin-bottom: 40px;
      > div {
        margin-bottom: 0;
      }
    }

    textarea {
      font-size: 16px;

      border: none;
      resize: none;

      padding: 18px 16px;
      margin-bottom: 40px;

      height: 270px;
      width: 100%;

      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.BG_300};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      &&::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  .flex-btn {
    display: flex;
    align-items: center;
    gap: 40px;

    margin-bottom: 60px;

    padding: 4px;

    button {
      margin: 0;
    }

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BG_100};
      color: ${({ theme }) => theme.COLORS.ACCENT};
    }
  }
`;

export const Bookmarks = styled.section`
  margin-bottom: 40px;

  label {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: inline-block;
    margin-bottom: 24px;
  }

  .container {
    background-color: ${({ theme }) => theme.COLORS.BG_100};
    border-radius: 10px;

    padding: 16px;

    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
`;
