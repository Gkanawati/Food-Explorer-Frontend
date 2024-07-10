import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 100vh;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  
  h1 {
    font-size: 2.3rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 5rem 0 2rem ;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 35rem;
  align-items: center;
  border-radius: 16px;
  margin: 0 auto;
  padding: 4rem;

  h2 {
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1rem;
`;

export const ErrorHelperText = styled.span`
  color: ${({ theme }) => theme.COLORS.TOMATO_300};
  font-size: 0.8rem;
  margin-top: 0;
`;