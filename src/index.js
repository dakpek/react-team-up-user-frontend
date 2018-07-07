import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import socket from './socket';
import uuid from './user/uuid'

socket.emit('playerEnter', {id: uuid})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
