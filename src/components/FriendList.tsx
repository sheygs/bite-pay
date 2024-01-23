import Friend from './Friend';
import { friends, IFriend } from '../data/friends';

const FriendList = (): JSX.Element => {
        return (
                <ul>
                        {friends.map((friend: IFriend) => (
                                <Friend key={friend.id} {...friend} />
                        ))}
                </ul>
        );
};

export default FriendList;
