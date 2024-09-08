import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import styles from './FriendsList.module.css';

const FriendsList = ({friends}) => {
    return (
        <ul className={styles.friendsList}>
            {friends.map((friend) => {
                return (
                    <li key={friend.id}>
                        <FriendListItem friend={friend}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendsList;
