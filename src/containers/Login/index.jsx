import {
  Button,
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';
import Logo from '../../assets/logo.png';
export function Login() {
  return (
    <div>
      <Container>
        <LeftContainer>
          <img src={Logo} alt="logo-dev-burguer" />
        </LeftContainer>
        <RightContainer>
          <Title>
            Olá,seja bem vindo ao <span>Dev Burguer!</span> Acesse com seu
            <span>Login e senha.</span>
          </Title>
          <Form>
            <InputContainer>
              <label htmlFor="">Email</label>
              <input type="email" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="">Senha</label>
              <input type="password" />
            </InputContainer>
            <Link>Esqueci minha senha.</Link>
            <Button>Entrar</Button>
          </Form>
		  <Link>Não possui conta? Clique aqui.</Link>
        </RightContainer>
      </Container>
    </div>
  );
}
