import Friend from '../Friend/Friend';
import { IFriend } from '../../types/types';

interface Props {
        friends: IFriend[];
}

const FriendList = ({ friends }: Props): JSX.Element => {
        return (
                <ul>
                        {friends.map((friend: IFriend) => (
                                <Friend key={friend.id} friend={friend} />
                        ))}
                </ul>
        );
};

export default FriendList;
