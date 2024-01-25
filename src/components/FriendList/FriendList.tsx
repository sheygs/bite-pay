import Friend from '../Friend/Friend';
import { IFriend } from '../../types/types';

interface Props {
        friends: IFriend[];
        selectedFriend: IFriend | null;
        onSelection: (friend: IFriend | null) => void;
}

const FriendList = ({ friends, selectedFriend, onSelection }: Props): JSX.Element => {
        return (
                <ul>
                        {friends.map((friend: IFriend) => (
                                <Friend
                                        key={friend.id}
                                        friend={friend}
                                        selectedFriend={selectedFriend}
                                        onSelection={onSelection}
                                />
                        ))}
                </ul>
        );
};

export default FriendList;
