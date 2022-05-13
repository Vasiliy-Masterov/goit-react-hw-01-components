import PropTypes from 'prop-types';
import friends from './friends.json';
import styles from './Friends-list.module.css';

export const FriendList = () => {

    return (
    <ul className={styles.friend_list}>
        {friends.map(item => (<li key={item.id} className={styles.item}>
            {item.isOnline ? <span className={styles.status} style={{ backgroundColor: "green" }}></span> :
            <span className={styles.status} style={{ backgroundColor:"red"}}></span>}
            <img className={styles.avatar} src={item.avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{item.name}</p>
        </li>))}
    </ul>);
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};
