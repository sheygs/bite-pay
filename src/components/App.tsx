import { useState } from 'react';
import FriendList from './FriendList/FriendList';
import AddFriendForm from './AddFriendForm/AddFriendForm';
import SplitBillForm from './SplitBillForm/SplitBillForm';
import { IFriend } from '../types/types';
import { friends as sampleFriends } from '../constants/friends';
import Button from './Button/Button';

function App() {
        const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
        const [friends, setFriends] = useState<IFriend[]>(sampleFriends);
        const [selectedFriend, setSelectedFriend] = useState<IFriend | null>(null);

        const handleShowAddFriend = (): void => {
                setShowAddFriend((prev) => !prev);
        };

        const handleAddFriend = (friend: IFriend): void => {
                setFriends((friends) => [...friends, friend]);
        };

        const handleSelection = (friend: IFriend | null): void => {
                // setSelectedFriend((prevFriend) => (prevFriend?.id === friend.id ? null : friend));
                setSelectedFriend(friend);
                // close the `addFriendForm` when a friend is selected
                setShowAddFriend(false);
        };

        return (
                <div className="app">
                        <div className="sidebar">
                                <FriendList
                                        friends={friends}
                                        selectedFriend={selectedFriend}
                                        onSelection={handleSelection}
                                />

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
                        {selectedFriend && (
                                <SplitBillForm
                                        selectedFriend={selectedFriend}
                                        onSelection={setSelectedFriend}
                                />
                        )}
                </div>
        );
}

export default App;
