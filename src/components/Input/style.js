import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  margin-bottom: 8px;
  padding-left: 16px;

  background-color: ${({ theme }) => theme.COLORS.BG_300};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  border-radius: 10px;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > input {
    padding-block: 20px;
    padding-right: 16px;

    width: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    outline: none;

    font-size: 16px;
    border-radius: 10px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &:-webkit-autofill {
      border: none;
      -webkit-text-fill-color: ${({ theme }) => theme.COLORS.LIGHT_300};
      caret-color: ${({ theme }) => theme.COLORS.LIGHT_300};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;
