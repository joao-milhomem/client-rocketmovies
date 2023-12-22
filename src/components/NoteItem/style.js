import { Link } from "react-router-dom";
import styled from "styled-components";

export const Component = styled(Link)`
  display: block;
  padding: 32px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BG_NOTE};

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 8px;
  }

  .rating {
    margin-bottom: 16px;
  }
  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 16px;

    margin-bottom: 16px;
  }
`;
