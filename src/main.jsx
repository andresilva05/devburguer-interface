import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from './routes';

import GlobaStyles from './styles/globalStyles';
import AppProvider from './hooks';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppProvider>
			<Elements stripe={stripePromise}>
				<RouterProvider router={router} />
			</Elements>
			<GlobaStyles />
			<ToastContainer autoClose={2000} theme="dark" />
		</AppProvider>
	</StrictMode>,
);
