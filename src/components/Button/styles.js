import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: filter 0.2s;
  border: none;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 220px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme, styleType }) => styleType == "primary" ? theme.COLORS.TOMATO_100 : theme.COLORS.DARK_800};

  &:hover {
    filter: brightness(1.2);
  }

  &:disabled {
    opacity: 0.5;
  }
`;