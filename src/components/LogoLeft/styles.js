import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.png'; // Certifique-se de importar corretamente

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`;