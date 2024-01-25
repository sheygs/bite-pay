const FormSplitBill = (): JSX.Element => {
        const handleSubmit = () => console.log('yay');
        return (
                <form
                        onSubmit={handleSubmit}
                        className="form-split-bill"
                        style={{ display: 'none' }}
                >
                        <h2>Split a bill with X</h2>
                        <label htmlFor="bill">💰Bill value</label>
                        <input
                                type="text"
                                id="bill"
                                name="bill"
                                value={'1000'}
                                placeholder="bill value"
                                onChange={() => console.log('bill change')}
                        />

                        <label htmlFor="expense">🧍Your expense</label>
                        <input
                                type="text"
                                id="expense"
                                name="expense"
                                value={'10000'}
                                onChange={() => console.log('bill change')}
                        />

                        <label htmlFor="friend expense">👬 X expense</label>
                        <input
                                type="text"
                                id="friend expense"
                                name="expense"
                                value={'0'}
                                disabled
                        />

                        <label htmlFor="payer">🤑Who is paying the bill</label>
                        <select
                                value={'x'}
                                id="payer"
                                name="payer"
                                onChange={() => console.log('s')}
                        >
                                <option value="you">You</option>
                                <option value={'x'}>X</option>
                        </select>
                </form>
        );
};

export default FormSplitBill;
