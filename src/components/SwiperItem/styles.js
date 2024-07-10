import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const FoodCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    max-width: 176px;
    max-height: 176px;
    border-radius: 50%;
    width: 100%;
  }
`;

export const FoodCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  gap: 15px;

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }
`;

export const ClickableArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  gap: 15px;
`;

export const FoodCardActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const FavIcon = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 1rem;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
`;

export const ItemPrice = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 1.5rem;
  }
`;

export const AddToCartButton = styled.button`
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
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