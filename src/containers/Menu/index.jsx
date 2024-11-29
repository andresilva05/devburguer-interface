import { Container, Banner, CategoryMenu, ProductsContainer } from './style';

export function Menu() {
  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBUGUER
          <br />
          ESTÁ AQUI!
          <span>Esse cardápio está irresistível</span>
        </h1>
        
      </Banner>

      <CategoryMenu>
        <h2>Categorias</h2>
      </CategoryMenu>

      <ProductsContainer>
        <h2>Nada</h2>
      </ProductsContainer>
    </Container>
  );
}
