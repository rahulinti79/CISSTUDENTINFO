import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import "../src/Components/Homepage"
import reportWebVitals from './reportWebVitals';
import Homepage from '../src/Components/Home/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    <Homepage />
  </React.StrictMode>
);

reportWebVitals();
