import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { Layout } from './Pages/Layout';



ReactDOM.render(
  <React.StrictMode>
  <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);