import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobaStyles from './styles/globalStyles';
import { Login } from './containers/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobaStyles />
    <Login />
  </StrictMode>,
);
