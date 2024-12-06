import React, { useState, useEffect } from 'react'; // Importa useState e useEffect
import { api } from '../../services/api'; // Ajuste o caminho para a API conforme necessário
import { formatPrice } from '../../utils/formatPrice'; // Ajuste o caminho para a função formatPrice
import { Container, Banner, CategoryMenu, CategoryButton, ProductsContainer, BackButton } from './styles'; // Ajuste os caminhos para seus styled-components ou componentes
import { CardProduct } from '../../components/CardProduct'; // Sem chaves
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const navigate = useNavigate();

	const { search } = useLocation();

	const queryParams = new URLSearchParams(search);

	const [activeCategory, setActiveCategory] = useState(() => {
		const categoryId = +queryParams.get('categoria'); // + => converte para number

		if (categoryId) {
			return categoryId;
		}
		return 0;
	});

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			const newCategories = [
				{
					id: 0,
					name: 'Todas',
				},
				...data,
			];

			setCategories(newCategories);
		}

		async function loadProducts() {
			const { data } = await api.get('/products');

			const newProducts = data.map((product) => ({
				currencyValue: formatPrice(product.price),
				...product,
			}));
			setProducts(newProducts);
		}

		loadCategories();
		loadProducts();
	}, []);

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredProducts(products);
		} else {
			const newfilteredProducts = products.filter((product) => product.category_id === activeCategory);
			setFilteredProducts(newfilteredProducts);
		}
	}, [products, activeCategory]);

	function goBackCategories() {
		navigate("/"); 
	  }

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
				{categories.map((category) => (
					<CategoryButton
						key={category.id}
						$isActiveCategory={category.id === activeCategory}
						onClick={() => {
							navigate(
								{
									pathname: '/cardapio',
									search: `?categoria=${category.id}`,
								},
								{
									replace: true,
								},
							);
							setActiveCategory(category.id);
						}}
					>
						{category.name}
					</CategoryButton>
				))}
			</CategoryMenu>

			<ProductsContainer>
				{filteredProducts.map((product) => (
					<CardProduct product={product} key={product.id} />
				))}
			</ProductsContainer>

			<BackButton onClick={goBackCategories}>Voltar</BackButton>

		</Container>
	);
}
