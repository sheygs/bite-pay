import { useState } from 'react';

import FriendList from './FriendList/FriendList';
import AddFriendForm from './AddFriendForm/AddFriendForm';
import FormSplitBill from './FormSplitBill/FormSplitBill';
import { IFriend } from '../types/types';
import { friends as sampleFriends } from '../constants/friends';
import Button from './Button/Button';

function App() {
        const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
        const [friends, setFriends] = useState<IFriend[]>(sampleFriends);

        const handleShowAddFriend = (): void => {
                setShowAddFriend((prev) => !prev);
        };

        const handleAddFriend = (friend: IFriend): void => {
                setFriends((friends) => [...friends, friend]);
        };

        return (
                <div className="app">
                        <div className="sidebar">
                                <FriendList friends={friends} />

                                {showAddFriend && (
                                        <AddFriendForm
                                                onShowAddFriend={handleShowAddFriend}
                                                onAddFriend={handleAddFriend}
                                        />
                                )}

                                <Button type="button" onClick={handleShowAddFriend}>
                                        {showAddFriend ? 'Close' : 'Add Friend'}
                                </Button>
                        </div>
                        <FormSplitBill />
                </div>
        );
}

export default App;
