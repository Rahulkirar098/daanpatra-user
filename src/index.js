import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Dashbord from "./Dashbord";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Dashbord /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

