import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 11rem);
`;

export const Content = styled.main`
  padding: 2rem 7.75rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2rem 1.5rem;
  }

  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  
  padding-bottom: 6rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-bottom: 8rem;
  }
`;

export const FilterText = styled.span`
  font-size: 0.8;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const EmptyContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  span {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;