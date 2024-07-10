import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: '100%';
`;

export const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 400;
  margin-bottom: 1rem;
`;