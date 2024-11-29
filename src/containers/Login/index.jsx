import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo-login.svg';
import { Button } from '../../components/Button';

import { ContainerLeft } from '../../components/LogoLeft';
import {
  Container,
  Form,
  InputContainer,
  RightContainer,
  Title,
  Link,
} from './styles';

export function Login() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha dev ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const {
        data: { token },
      } = await toast.promise(
        api.post('/session', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando seus dados...',
          success: {
            render() {
              setTimeout(() => {
                navigate('/');
              }, 2000);
              return `Seja Bem-vindo(a), ${data.user.name}!`;
            },
          },
          error: 'E-mail ou Senha incorretos',
        },
      );
    
      localStorage.setItem('token', token)

    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro inesperado. Tente novamente!');
    }
  };

  return (
    <div>
      <Container>
        <ContainerLeft>
          <img src={Logo} alt="logo-dev-burguer" />
        </ContainerLeft>
        <RightContainer>
          <Title>
            Olá,seja bem vindo ao <span>Dev Burguer!</span>
            <br />
            Acesse com seu<span> Login e senha.</span>
          </Title>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <label htmlFor="">Email</label>
              <input type="email" {...register('email')} />
              <p>{errors?.email?.message}</p>
            </InputContainer>

            <InputContainer>
              <label htmlFor="">Senha</label>
              <input type="password" {...register('password')} />
              <p>{errors?.password?.message}</p>
            </InputContainer>

            <Button type="submit">Entrar</Button>
          </Form>
          <p>
            Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
          </p>
        </RightContainer>
      </Container>
    </div>
  );
}
