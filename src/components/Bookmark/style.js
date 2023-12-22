import styled from "styled-components";

export const Component = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  border-radius: 8px;

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT_100}` : "none"};

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "none" : theme.COLORS.BG_300};

  input {
    border: none;
    outline: none;

    padding: 16px;

    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border-radius: 8px;

    &&::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  button {
    position: absolute;
    right: 0;
    display: flex;
    margin-inline: 16px;

    color: ${({ theme }) => theme.COLORS.ACCENT};

    svg {
      font-size: 22px;
    }
  }
`;
