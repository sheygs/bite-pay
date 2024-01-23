import './App.css';
import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';
import FormSplitBill from './components/FormSplitBill';

function App() {
        return (
                <div className="app">
                        <div className="sidebar">
                                <FriendList />
                                <button type="button" className="button">
                                        Add Friend
                                </button>
                                <AddFriendForm />
                        </div>
                        <FormSplitBill />
                </div>
        );
}

export default App;
