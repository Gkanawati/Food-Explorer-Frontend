import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  button {
    margin-bottom: 42px;
  }


  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 42px;
  justify-content: center;
  flex-wrap: wrap;

  img {
    max-width: 350px;
    width: 100%;
    height: 350px;
    border-radius: 50%;
  }
  
  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    align-items: center;

    img {
      max-width: 200px;
      height: auto;
    }
  }

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`;

export const TextContent = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ChipItem = styled.li`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 4px 8px;
  border-radius: 5px;
`;

export const IngredientesContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SelectQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    background: none;
    border: none;
  }

  span {
    font-size: 1.3rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const ActionsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 48px;
  width: 100%;
  flex-wrap: wrap;

  button {
    margin-bottom: 0;
  }
`;