import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

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

export const LinkItem = styled(Link)`
  color: #3da9fc;
  border: 1px solid #3da9fc;
  border-radius: 20px;
  padding: 5px 15px;
  transition: all 0.3s ease;

  :hover {
    background: #3da9fc;
    color: #fff;
  }
`;

export const Title = styled.h1`
  padding: 3rem 0;
  text-align: center;
`;
