import PropTypes from 'prop-types';
import user from './user.json';
import style from './Social-profile.module.css';

export const Profile = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stats_item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  state: PropTypes.shape({
    followers: PropTypes.number,
    view: PropTypes.number,
    likes: PropTypes.number,
  }),
};
