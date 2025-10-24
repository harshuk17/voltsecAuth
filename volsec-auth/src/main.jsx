import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-fp50x8rk8uqemikd.us.auth0.com"
    clientId="1N79nnB52ysv2KpxzRmF4pU4h9Wpoa8l"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
)
