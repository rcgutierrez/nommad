import React from 'react';
import ReactDOM from 'react-dom';
import Nommad from './Nommad';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nommad />, document.getElementById('root'));
registerServiceWorker();
