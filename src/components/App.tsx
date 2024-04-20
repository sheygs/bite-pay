import { useState } from 'react';
import { FriendList } from './FriendList';
import { AddFriendForm } from './AddFriendForm';
import { SplitBillForm } from './SplitBillForm';
import { IFriend } from '../types';
import { friends as sampleFriends } from '../constants';
import { Button } from './Button';

export function App(): JSX.Element {
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

        const handlSplitBillForm = (amount: number) => {
                setFriends((friends: IFriend[]) =>
                        friends.map((friend) =>
                                friend.id === selectedFriend?.id
                                        ? { ...friend, balance: friend.balance + amount }
                                        : friend
                        )
                );
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
                                        onSplitBillForm={handlSplitBillForm}
                                />
                        )}
                </div>
        );
}
