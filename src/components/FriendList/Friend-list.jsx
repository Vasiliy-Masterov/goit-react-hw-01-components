//import PropTypes from 'prop-types';
//import friends from './friends.json';
//import style from './Friends-list.module.css';

export const FriendList = () => {
   // const { avatar, name, isOnline } = friends;
    return (<ul className="friend-list">
        <li className="item">
            <span className="status"></span>
            <img className="avatar" src="" alt="User avatar" width="48" />
            <p className="name"></p>
        </li>
    </ul>);
};