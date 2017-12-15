import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SimpleExample from './SimpleExample';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<SimpleExample />, document.getElementById('example'));
registerServiceWorker();
