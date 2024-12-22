import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    margin: 12px auto 0;
  }
`;

export const ContainerItens = styled.div`
  background: url('${(props) => props.imageUrl}') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 200px;
`;
export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 30px;
  font-size: 20.5px;
  font-weight: 500;
  margin-top: 50px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
