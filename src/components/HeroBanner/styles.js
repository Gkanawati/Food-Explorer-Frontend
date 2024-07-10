import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  width: 100%;
  margin-top: 7.75rem;
  border-radius: 8px;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: rgb(9,30,38);
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#091e26",endColorstr="#00131c",GradientType=1);

  .img-container {
    align-self: end;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 36.125rem;
    max-width: 41rem;
  }

  div {
    flex: 1;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 100;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 100px;
    margin-top: 0.5rem;

    img {
      max-width: 14rem;
      margin-left: -10px;
      margin-right: 10px;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
    }
  }
`;