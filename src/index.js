import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ToDo from "./ToDo/ToDo"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ToDo/>
    </React.StrictMode>
);
reportWebVitals();
