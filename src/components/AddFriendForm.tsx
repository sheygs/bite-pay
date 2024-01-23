const AddFriendForm = (): JSX.Element => {
        return (
                <form className="form-add-friend" style={{ display: 'none' }}>
                        <label>👬 Friend name</label>
                        <input type="text" value={''} placeholder="add friend" />

                        <label>🌆 Image URL</label>
                        <input type="text" value={''} placeholder="image url" />

                        <button type="button" className="button">
                                Add
                        </button>
                </form>
        );
};

export default AddFriendForm;
