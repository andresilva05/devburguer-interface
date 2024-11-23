import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from './routes';

import GlobaStyles from './styles/globalStyles';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobaStyles />
    <ToastContainer autoClose={2000} theme='dark'/>
  </StrictMode>,
);
