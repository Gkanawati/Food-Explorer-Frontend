import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import 'swiper/css';
import './styles/swiper.css';
import theme from './styles/theme.js'
import { GlobalStyles } from './styles/global.js'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth.jsx';
import ApiProvider from './hooks/api.jsx';
import { CartProvider } from './hooks/cart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <AuthProvider>
          <ApiProvider>
            <Routes />
          </ApiProvider>
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
