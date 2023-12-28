import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Utils/store.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT_ID}>

      <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
