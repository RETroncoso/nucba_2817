import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 5rem;
`;

export const ImgContainer = styled.div``;

export const Card = styled.div`
  background-color: #16161a;
  padding: 5px 5px 20px;
  color: #fffffe;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    border-radius: 8px;
    width: 100%;
  }

  h2 {
    color: #3da9fc;
  }

  span {
    font-weight: 800;
    font-size: 1.2rem;
  }
`;
