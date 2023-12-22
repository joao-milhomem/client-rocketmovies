import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    fill: ${({ theme }) => theme.COLORS.ACCENT};
    stroke: ${({ theme }) => theme.COLORS.ACCENT};
  }
`;
