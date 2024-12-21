import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../CheckoutForm/styles.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

export default function CheckoutForm() {
	const { cardProducts, clearCart } = useCart();

	const navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();
	const {
		state: { dpmCheckerLink },
	} = useLocation();

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			console.error('Stripe ou Elements com falha, tente novamente');
			return;
		}

		setIsLoading(true);

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});

		if (error) {
			setMessage(error.message);
			toast.error(error.message);
		} else if (paymentIntent && paymentIntent.status === 'succeeded') {
			try {
				const products = cardProducts.map((product) => {
					return {
						id: product.id,
						quantity: product.quantity,
						price: product.price,
					};
				});

				const { status } = await api.post(
					'/orders',
					{ products },
					{
						validateStatus: () => true,
					},
				);

				if (status === 200 || status === 201) {
					setTimeout(() => {
						navigate('/complete');
						clearCart();
					}, 2000);
					clearCart();
					toast.success('Pedido Realizado com Sucesso!');
				} else if (status === 409) {
					toast.error('Falha ao realizar o seu pedido');
				} else {
					throw new Error();
				}
			} catch (error) {
				toast.error('😭 Falha no Sistema! Tente novamente');
			}
		} else {
			toast.error('😭 Falha no Sistema! Tente novamente');
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: 'tabs',
	};

	return (
		<div className="container">
			<form id="payment-form" onSubmit={handleSubmit}>
				<PaymentElement id="payment-element" options={paymentElementOptions} />
				<button disabled={isLoading || !stripe || !elements} id="submit" className="button">
					{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
					<span id="button-text">
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						{isLoading ? <div className="spinner" id="spinner"></div> : 'Pagar Agora'}
					</span>
				</button>
				{/* Show any error or success messages */}
				{message && <div id="payment-message">{message}</div>}
			</form>

			{/* [DEV]: Display dynamic payment methods annotation and integration checker */}
			<div id="dpm-annotation">
				<p>
					Os métodos de pagamentos são disponibilizados de acordo com a sua região&nbsp;
					<a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer" id="dpm-integration-checker">
						Ver métodos de Pagamento
					</a>
				</p>
			</div>
		</div>
	);
}
