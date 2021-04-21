import React from 'react';
import FriendsListItem from '../FriendListItem/FriendsListItem';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css'

const FriendList =({friends}) => (
  <ul className={styles.friend_list}>
    {friends.map (({avatar, name, isOnline, id}) => (
    <FriendsListItem
    avatar = {avatar}
    name = {name}
    isOnline = {isOnline}
    key = {id}
    /> 
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default FriendList;