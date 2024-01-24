import { IFriend } from '../../types/types';
import Button from '../Button/Button';

interface Props {
        friend: IFriend;
}

const Friend = ({ friend: { id, name, image, balance } }: Props): JSX.Element => {
        return (
                <li>
                        <img src={image} alt={name} />

                        <h3>{name}</h3>

                        {balance < 0 && (
                                <p className={balance < 0 ? 'red' : ''}>
                                        You owe {name} {Math.abs(balance)}$
                                </p>
                        )}

                        {balance > 0 && (
                                <p className={balance > 0 ? 'green' : ''}>
                                        {name} owes You {balance}$
                                </p>
                        )}

                        {balance === 0 && <p>You & {name} are even</p>}

                        <Button onClick={() => console.log(id)} type="button">
                                Select
                        </Button>
                </li>
        );
};

export default Friend;
