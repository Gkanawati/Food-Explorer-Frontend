import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  display: flex;
  flex-direction: column;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    z-index: 9;
    transition: transform 0.3s;
    transform: translateX(-100%);

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const HeaderSideMenu = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 32px;

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 2.25rem 1.75rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};

  .input-side_menu {
    margin-bottom: 2.25rem;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  padding: 1rem 1.5rem;
  width: 100%;
  font-size: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  text-align: start;
`;
