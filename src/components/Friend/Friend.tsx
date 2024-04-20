import { IFriend } from '../../types/types';
import { Button } from '../Button/Button';

interface Props {
        friend: IFriend;
        selectedFriend?: IFriend | null;
        onSelection: (friend: IFriend | null) => void;
}

export const Friend = ({ friend, selectedFriend, onSelection }: Props): JSX.Element => {
        const isSelected: boolean = selectedFriend?.id === friend.id;

        return (
                <li className={isSelected ? 'selected' : ''}>
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

                        <Button onClick={() => onSelection(friend)} type="button">
                                {isSelected ? 'Close' : 'Select'}
                        </Button>
                </li>
        );
};
