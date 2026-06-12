import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/css/bootstrap-icons.css';
// import './assets/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/styles/main.css';   // LAST me hamesha
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx';
//import './assets/js/main.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)