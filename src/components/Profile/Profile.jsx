import styles from './Profile.module.css';
import clsx from 'clsx';
import data from '../data/user.json';
import PropTypes from "prop-types";

function Profile({ username, tag, location, avatar, stats }) {
  console.log(data);
  return (
    <div className={clsx(styles.profile)}>
      <div className={clsx(styles.description)}>
        <img
          src={avatar}
          alt="User avatar"
          class="avatar"
        />
        <h2 className={clsx(styles.name)}>{username}</h2>
        <p className={clsx(styles.tag)}>@{tag}</p>
        <p className={clsx(styles.location)}>{location}</p>
      </div>

      <ul className={clsx(styles.stats)}>
        <li>
          <span className={clsx(styles.label)}>Followers</span>
          <span className={clsx(styles.quantity)}>{stats.followers}</span>
        </li>
        <li>
          <span className={clsx(styles.label)}>Views</span>
          <span className={clsx(styles.quantity)}>{stats.views}</span>
        </li>
        <li>
          <span className={clsx(styles.label)}>Likes</span>
          <span className={clsx(styles.quantity)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
