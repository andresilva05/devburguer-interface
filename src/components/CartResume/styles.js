import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-direction: column;

  * {
    color: ${(props) => props.theme.secondBlack};
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      'title title'
      'Items Items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: ${(props) => props.theme.secondBlack};
      color: ${(props) => props.theme.white};
      width: 100%;
      padding: 15px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

    }
    .Items {
      grid-area: Items;
      padding-left: 20px;
    }
    .Items-price {
      grid-area: Items-price; 
      padding-right: 20px;
    }
    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
    }
    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    font-size: 20px;
    font-weight: 700;
    padding: 20px;

    * {
      font-weight: 700;
    }
  }
`;
