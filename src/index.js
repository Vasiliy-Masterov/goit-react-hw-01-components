import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

//import { Statistics } from 'components/Statistics';
//import { FriendList } from 'components/Friend-list';
//import { TransactionHistory } from 'components/Transaction-history';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
