import React from 'react';
import ReactDOM from 'react-dom/client'
import AppRoutes from "./AppRoutes";
import { Toaster } from "sonner";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
    <Toaster richColors />
  </React.StrictMode>
);
