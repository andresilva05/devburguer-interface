import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 95px;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  cursor: grab;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    gap: 5px;
  }

  p {
    font-size: 18px;
    color: #ff8c05;
    line-height: 20px;
    font-weight: 700;
    margin-top: 95px;
  }
  strong {
    font-size: 22px;
    color: #363636;
    font-weight: 800;
    line-height: 20px;
  }

`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    
`;