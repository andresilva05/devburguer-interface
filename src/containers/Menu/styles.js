import styled from 'styled-components';
import BannerHamburguer from '../../assets/BannerHamburguer.svg';
import Background from '../../assets/background.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburguer}');
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #fff;
    position: absolute;

    right: 20%;
    top: 30%;

    span {
      display: block;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && ' 3px solid #9758a6'};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;
`;

export const BackButton = styled.button`
  background-color: #9758a6;
  width: 190px;
  height: 43px;
  border: 0;
  border-radius: 28px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;

  position: fixed;
  bottom: 10px;    
  right: 20px; 
`;
