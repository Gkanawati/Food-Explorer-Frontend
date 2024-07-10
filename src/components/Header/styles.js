import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem 5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  img {
    max-width: 12.5rem;
  }

  .receipt-desktop {
    display: flex;
    gap: 1rem;
  }

  .receipt-mobile {
    display: none;
  }

  .input-header {
    width: 60%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1.5rem 1.75rem;

    .input-header {
      display: none;
    }
    
    .receipt-desktop {
      display: none;
    }

    .receipt-mobile {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const HeaderInput = styled.div`
  width: 60%;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }

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

export const Menu = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: 2.5rem;
  display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const CounterReceipt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #fff;
  font-size: 14px;
`;