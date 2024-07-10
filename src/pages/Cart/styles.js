import styled from 'styled-components'

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
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  // div filhas diretamente de Content tem flex: 1
  > div {
    flex: 1;
  }
`;

export const TitleSection = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    font-size: 16px;
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const TextCartItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const TextContent = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 8px;
  overflow: hidden;
`;

export const SelectPaymentMethod = styled.div`
  display: flex;
  border-radius: 8px;
  width: 100%;
`;

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  gap: 8px;
  background: ${({ isSelected, theme }) => isSelected ? theme.COLORS.DARK_800 : 'none'};
  border: none;
  color: ${({ isSelected, theme }) => isSelected ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_400};
  flex: 1;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  margin-bottom: 0 !important;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
`;

export const ContentPayment = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 42px;
`;