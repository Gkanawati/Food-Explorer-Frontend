import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const HeaderInput = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    font-size: 1rem;
    flex: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;