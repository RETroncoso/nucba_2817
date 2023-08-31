import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    --white: #fff;
    --background: #000;
    --primary: #4f46e5;
    --error: #b91c1c;
    --gray: #6b7280;
}


body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
    overflow-x: hidden;
    font-family: sans-serif;

}
`;

export const Wrapper = styled.div`
  background: var(--background);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
