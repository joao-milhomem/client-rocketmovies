import styled from "styled-components";

export const Interface = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header"
    "title"
    "main";

  height: 100vh;
  overflow: none;
`;

export const Section = styled.section`
  grid-area: title;

  width: 1120px;
  margin: auto;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-block: 38px;

    > a {
      background-color: ${({ theme }) => theme.COLORS.ACCENT};
      color: ${({ theme }) => theme.COLORS.BG_100};
      border-radius: 8px;

      padding: 16px 32px;

      display: flex;
      align-items: center;
      gap: 8px;

      font-weight: 500;

      > svg {
        font-size: 24px;
      }
    }
  }
`;

export const Notes = styled.main`
  grid-area: main;
  overflow-y: auto;

  width: 1120px;
  height: 100%;

  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-inline: 4px 18px;
  padding-block: 4px 40px;
`;
