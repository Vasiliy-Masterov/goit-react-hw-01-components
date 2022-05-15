import PropTypes from 'prop-types';
import friends from './friends.json';
import styles from './Friends-list.module.css';

export const FriendList = () => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <span
            className={styles.status}
            style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }}
          ></span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    )
  ),
};
