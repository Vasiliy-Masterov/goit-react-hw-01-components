import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from 'components/App';
//import { Test } from 'components/Test';
import { Profile } from 'components/Social-profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/Friend-list';
import { TransactionHistory } from 'components/Transaction-history';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics />
    <FriendList />
    <TransactionHistory />
  </React.StrictMode>
);
