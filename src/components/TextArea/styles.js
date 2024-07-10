import styled from 'styled-components';

export const Container = styled.div`
  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
    display: block;
  }
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  resize: none;
  
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  min-height: 120px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;