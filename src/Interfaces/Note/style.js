import styled from "styled-components";

export const Component = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main"
    "actions";

  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.main`
  width: 1120px;
  margin: auto;
  padding: 40px 0 80px;

  grid-area: main;
  overflow-y: auto;

  > a {
    display: flex;
    gap: 8px;
    font-size: 16px;

    padding-block: 40px 24px;
    svg {
      font-size: 20px;
    }
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 18px;

    margin-bottom: 24px;

    h1 {
      font-size: 36px;
      font-weight: 500;
    }

    .tags {
      display: flex;

      svg {
        font-size: 20px;
      }
    }
  }

  .details {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;

    margin-bottom: 40px;

    .profile-pic {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }

    .date {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        font-size: 20px;
      }
    }
  }

  p {
    margin-top: 40px;
    text-align: justify;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;

  width: 1120px;
  margin: auto;
  padding-bottom: 40px;

  > button:first-child {
    background-color: ${({ theme }) => theme.COLORS.BG_100};
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }
`;
