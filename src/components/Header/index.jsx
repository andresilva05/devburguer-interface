import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content } from './styles';
import { UserCircle, ShoppingCart } from '@phosphor-icons/react';

export function Header() {
	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink>Home</HeaderLink>
						<HeaderLink>Cardápio</HeaderLink>
					</div>
				</Navigation>
				<Options>
					<Profile>
						<UserCircle color="#333" size={24} />
						<div>
							<p>
								Olá, <span>André</span>
							</p>
							<Logout>Sair</Logout>
						</div>
					</Profile>
					<LinkContainer>
						<ShoppingCart color="#000000" size={24} />
						<HeaderLink>Carrinho</HeaderLink>
					</LinkContainer>
				</Options>
			</Content>
		</Container>
	);
}