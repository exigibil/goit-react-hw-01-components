import React from 'react';
import styles from './Friendlist.module.css';
import clsx from 'clsx';
import data from '../data/friends.json';
import PropTypes from "prop-types";


function FriendList({friends}) {
  return (
    <ul className={clsx(styles.friendlist)}>
      {friends.map((friend, index) => (
        <li key={index} className={clsx(styles.item)}>
          <div className={clsx(styles.bullet, friend.isOnline ? styles.online : styles.offline)}></div>
          <img className={styles.avatar} src={friend.avatar} alt={friend.name} />
          <div className={styles.details}>
            <span className={styles.name}>{friend.name}</span>
          
          </div>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })).isRequired,
};

export default FriendList;