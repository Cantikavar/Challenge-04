import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { Layout } from './Pages/Layout';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <Layout/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);