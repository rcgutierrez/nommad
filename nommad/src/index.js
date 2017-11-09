import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nommad from './Nommad';
// import * as firebase from "./utils/firebase";
// import config from './utils/firebase';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Nommad />, document.getElementById('root'));
registerServiceWorker();
