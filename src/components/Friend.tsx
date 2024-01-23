import { IFriend } from '../data/friends';

const Friend = ({ id, name, image, balance }: IFriend): JSX.Element => {
        return (
                <li>
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                        <p>
                                {name} owes you {balance}$
                        </p>
                        <button
                                className="button"
                                onClick={() => console.log('handleFriendSelection ' + id)}
                                type="button"
                        >
                                Select
                        </button>
                </li>
        );
};

export default Friend;
