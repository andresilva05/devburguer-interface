import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }
  padding-left: 40px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.gren};
  padding-bottom: 12px;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
    margin: 12px auto 0;
  }
`;
