import { Link } from "react-router-dom";
import styled from "styled-components";

export const Component = styled.header`
  grid-area: header;

  padding-block: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BG_400};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;

    width: 1120px;
    margin: 0 auto;

    > a {
      font-size: 24px;
      font-weight: bold;
    }

    > div {
      margin: 0;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .text-wrapper {
    display: flex;
    flex-direction: column;
    text-align: end;

    strong {
      width: max-content;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }

  > a {
    width: 64px;
    height: 64px;
    border-radius: 50%;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
`;
