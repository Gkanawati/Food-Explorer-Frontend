import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
  img {
    width: 150px;
    filter: grayscale(100%);
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    img {
      width: 100px;
    }
  }

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  // fix on the bottom of the page
  width: 100%;
`;