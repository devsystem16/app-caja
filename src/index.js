import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
import * as serviceWorker from './serviceWorker';
import Router  from './Router'
import "../node_modules/izitoast/dist/css/iziToast.min.css";

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
