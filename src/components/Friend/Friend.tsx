import { IFriend } from '../../types/types';

interface Props {
        friend: IFriend;
}

const Friend = ({ friend }: Props): JSX.Element => {
        return (
                <li>
                        <img src={friend.image} alt={friend.name} />
                        <h3>{friend.name}</h3>
                        {friend.balance < 0 && (
                                <p className={friend.balance < 0 ? 'red' : ''}>
                                        You owe {friend.name} {Math.abs(friend.balance)}$
                                </p>
                        )}
                        {friend.balance > 0 && (
                                <p className={friend.balance > 0 ? 'green' : ''}>
                                        {friend.name} owes You {friend.balance}$
                                </p>
                        )}
                        {friend.balance === 0 && <p>You & {friend.name} are even</p>}
                        <button
                                className="button"
                                onClick={() => console.log('handleFriendSelection ' + friend.id)}
                                type="button"
                        >
                                Select
                        </button>
                </li>
        );
};

export default Friend;
