import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './Provider';
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRouter from './router';    

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
      <Providers>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Providers>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
