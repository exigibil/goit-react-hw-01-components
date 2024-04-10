import './App.css';
import React, { useState } from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friendlist/Friendlist';
import TransactionHistory from './Transactions/Transactions';
import user from './data/user.json';
import data from './data/data.json';
import friendsData from './data/friends.json';
import transactionsData from './data/transactions.json';

export const App = () => {
  
  const ids = data.map(item => item.id);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);

  return (
    <>
      <div className="texttitle">
        <p>Topa's React APP</p>
      </div>


      <div className="container">
        <div className="profile-container">
          <div className="profile">
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />

            <Statistics ids={ids} />
          </div>

          <div>
            <h2 className="text-title">Friend List</h2>
            <FriendList friends={friendsData} />
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setShowTransactionHistory(!showTransactionHistory)}
          >
            {showTransactionHistory
              ? 'Hide Transaction History'
              : 'Show Transaction History'}
          </button>
          {showTransactionHistory && (
            <TransactionHistory items={transactionsData} />
          )}
        </div>
      </div>
    </>
  );
};
