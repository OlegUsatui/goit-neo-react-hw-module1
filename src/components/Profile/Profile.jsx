import styles from './Profile.module.css';

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileMain}>
                <img
                    className={styles.profileAvatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={styles.profileName}>{name}</p>
                <p className={styles.profileTag}>@{tag}</p>
                <p className={styles.profileLocation}>{location}</p>
            </div>

            <ul className={styles.profileStats}>
                <li className={styles.profileStatItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={styles.profileStatItem}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={styles.profileStatItem}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;
