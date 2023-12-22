import styled from "styled-components";

export const Component = styled.button`
  width: 100%;

  padding: 16px 0;
  margin-top: 16px;

  background-color: ${({ theme }) => theme.COLORS.ACCENT};
  color: ${({ theme }) => theme.COLORS.BG_400};
  border-radius: 10px;

  font-size: 16px;
  font-weight: 500;
`;
