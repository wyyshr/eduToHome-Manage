import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css'
import RouterView from "./router/Router";
import 'antd/dist/antd.css'
import Store from "./store/Store";

ReactDOM.render(
  <Store>
    <RouterView />
  </Store>,
  document.getElementById('root')
);
