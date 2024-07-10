import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 3.125rem 5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > div a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-bottom: 0.75rem;
  }

  .tags {
    display: flex;
    gap: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2rem 3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2rem;
  font-weight: 400;
`;

export const InputImageContainer = styled.div`
  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  > label {
    div {
      width: 100%;
      height: 56px;
      padding: 12px;
      background: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border: none;
      border-radius: 10px;
      margin-bottom: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const InputSelectContainer = styled.div`
  width: 100%;
  max-width: 390px;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
    display: block;
  }

  select {
    width: 100%;
    height: 56px;
    padding: 12px;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    border-radius: 10px;
    margin-bottom: 8px;
  }
`;