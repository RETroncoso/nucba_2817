import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  width: 100%;

  & input {
    padding: 10px;
    width: 100%;
    border: none;
    outline: none;
    background: #282c34;
    color: #fff;
  }
`;

export const Button = styled.button`
  background-color: #3da9fc;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 15px 25px;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;
