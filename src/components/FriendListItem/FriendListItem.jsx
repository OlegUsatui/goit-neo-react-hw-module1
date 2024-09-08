import styles from './FriendsListItem.module.css';

const FriendListItem = ({friend}) => {
    const {avatar, name, isOnline} = friend;
    return (
        <div className={styles.friendCard}>
            <img className={styles.friendAvatar} src={avatar} alt="Avatar"/>
            <p className={styles.friendName}>{name}</p>
            <p className={`${styles.friendStatus} ${isOnline ? styles.online : styles.offline}`}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    )
}

export default FriendListItem;
