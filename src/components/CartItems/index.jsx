import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice, TrashImage } from './styles';
import TrashIcon from '../../assets/trash.svg';

export function CartItems() {
	const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();
	return (
		<div>
			<Table.Root>
				<Table.Header>
					<Table.Tr>
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						<Table.Th></Table.Th>
						<Table.Th>Itens</Table.Th>
						<Table.Th>Preço</Table.Th>
						<Table.Th>Quantidade</Table.Th>
						<Table.Th>Total</Table.Th>
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						<Table.Th></Table.Th>
					</Table.Tr>
				</Table.Header>
				<Table.Body>
					{cartProducts?.length ? (
						cartProducts.map((product) => (
							<Table.Tr key={product.id}>
								<Table.Td>
									<ProductImage src={product.url} alt={product.name} />
								</Table.Td>
								<Table.Td>{product.name}</Table.Td>
								<Table.Td>{formatPrice(product.price)}</Table.Td>
								<Table.Td>
									<ButtonGroup>
										{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
										<button onClick={() => decreaseProduct(product.id)}>-</button>
										{product.quantity}
										{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
										<button onClick={() => increaseProduct(product.id)}>+</button>
									</ButtonGroup>
								</Table.Td>
								<Table.Td>
									<ProductTotalPrice>{formatPrice(product.price * product.quantity)}</ProductTotalPrice>
								</Table.Td>
								<Table.Td>
									<TrashImage src={TrashIcon} alt="lixeira" onClick={() => deleteProduct(product.id)} />
								</Table.Td>
							</Table.Tr>
						))
					) : (
						<EmptyCart>Carrinho Vazio</EmptyCart>
					)}
				</Table.Body>
			</Table.Root>
		</div>
	);
}