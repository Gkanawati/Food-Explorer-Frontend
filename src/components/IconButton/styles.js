import styled from 'styled-components';

export const Container = styled.button`
  background-color: transparent;
  border: none;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 700;
  font-size: 1.5rem;

  svg {
    font-size: 1.5rem;
    margin-right: 4px;
  }
`;