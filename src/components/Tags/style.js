import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  gap: 8px;

  span {
    display: inline-block;
    padding: 6px 16px;
    margin-right: 8px;

    background-color: ${({ theme }) => theme.COLORS.BG_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    border-radius: 8px;

    font-size: 12px;
  }
`;
