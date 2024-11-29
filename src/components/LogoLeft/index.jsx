import PropTypes from 'prop-types';
import { LeftContainer } from './styles';

export function ContainerLeft({ children, ...props }) {
  return <LeftContainer {...props}>{children}</LeftContainer>;
}

ContainerLeft.propTypes = {
  children: PropTypes.node,  // Alterado para aceitar qualquer tipo de conteúdo (texto, componentes, etc.)
};
