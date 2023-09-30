import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  margin-left: 40px;
  gap: 20px;
`;

export const Input = styled.input`
  display: flex;
  width: 400px;
  height: 40px;
  padding-left: 15px;
  &::placeholder {
    padding-left: 15px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #6495ed;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: black;
  border: none;
`;
