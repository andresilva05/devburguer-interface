import Logo from '../../assets/logo-login.svg';

import { Banner, Container, Content, Title } from './styles';

export function Cart() {
	return (
		<Container>
			<Banner>
				<img src={Logo} alt="logo devburguer" />
			</Banner>
			<Title>Checkout - Pedido</Title>
			<Content>
				{/* <CartItens /> */}
				{/* <CartResume /> */}
			</Content>
		</Container>
	);
}
