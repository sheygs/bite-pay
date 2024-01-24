import { FormEvent, useState } from 'react';
import { IFriend } from '../../types/types';
import Button from '../Button/Button';

interface Props {
        onShowAddFriend: () => void;
        onAddFriend: (friend: IFriend) => void;
}

interface FriendDetail {
        name: string;
        image: string;
}

const AddFriendForm = ({ onShowAddFriend, onAddFriend }: Props): JSX.Element => {
        const [friendDetail, setFriendDetail] = useState<FriendDetail>({
                name: '',
                image: 'https://i.pravatar.cc/42',
        });

        const handleSubmit = (e: FormEvent): void => {
                e.preventDefault();

                const { name, image } = friendDetail;

                if (!name || !image) return;

                const newFriend: IFriend = {
                        id: Math.random(),
                        ...friendDetail,
                        balance: 0,
                };

                onAddFriend(newFriend);

                setFriendDetail((currState) => ({
                        ...currState,
                        name: '',
                        image: 'https://i.pravatar.cc/42',
                }));

                // close the `addFriendForm` for each friend added
                onShowAddFriend();
        };

        const handleInputChange = (e: { target: { name: string; value: string } }) => {
                const { name, value } = e.target;

                setFriendDetail((prevState) => ({
                        ...prevState,
                        [name]: value,
                }));
        };

        return (
                <form className="form-add-friend" onSubmit={handleSubmit}>
                        <label htmlFor="name">👬Name</label>

                        <input
                                id="name"
                                name="name"
                                type="text"
                                value={friendDetail.name}
                                onChange={handleInputChange}
                                placeholder="add friend"
                        />

                        <label htmlFor="image-url">🌆Image URL</label>

                        <input
                                id="image"
                                name="image"
                                type="text"
                                value={friendDetail.image}
                                onChange={handleInputChange}
                                placeholder="url"
                        />

                        <Button type="submit">Add</Button>
                </form>
        );
};

export default AddFriendForm;
