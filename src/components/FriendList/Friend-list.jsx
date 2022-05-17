import PropTypes from 'prop-types';
import styles from './Friends-list.module.css';
import { FriendListItem } from '../FriendListItem';

export const FriendList = () => {
  return (
    <ul className={styles.friend_list}>
      <FriendListItem />
    </ul>
  );
};

FriendList.propTypes = {
  FriendListItem: PropTypes.node,
};
