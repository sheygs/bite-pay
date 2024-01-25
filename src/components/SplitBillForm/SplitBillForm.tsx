import { FormEvent, SetStateAction, useState } from 'react';
import { IFriend, ISplitBillForm } from '../../types/types';
import Button from '../Button/Button';

interface Props {
        selectedFriend: IFriend | null;
        onSelection: (friend: IFriend | null) => void;
        onSplitBillForm: (amount: number) => void;
}

const SplitBillForm = ({ selectedFriend, onSelection, onSplitBillForm }: Props): JSX.Element => {
        const [bill, setBill] = useState<string | number>('');
        const [expense, setExpense] = useState<string | number>('');
        const [payer, setPayer] = useState<string>('me');

        const friendExpense = Number(bill) - Number(expense);

        const handlePayerChange = (e: { target: { value: SetStateAction<string> } }) => {
                setPayer(e.target.value);
        };

        const handleSubmit = (e: FormEvent) => {
                e.preventDefault();

                if (!bill || !expense) return;

                const splitBillForm: ISplitBillForm = {
                        bill,
                        expense,
                        payer,
                };

                console.log(splitBillForm);

                onSplitBillForm(payer === 'me' ? friendExpense : -expense);

                setBill('');
                setExpense('');
                setPayer('me');

                // close the `splitBillForm` after submission
                // by setting `selectedFriend` to null
                onSelection(null);
        };

        return (
                <form onSubmit={handleSubmit} className="form-split-bill">
                        <h2>Split a bill with {selectedFriend?.name}</h2>

                        <label htmlFor="bill">💰Bill value</label>
                        <input
                                id="bill"
                                name="bill"
                                value={bill}
                                type="text"
                                placeholder="bill value"
                                onChange={(e) => setBill(Number(e.target.value))}
                        />

                        <label htmlFor="expense">🧍Your expense</label>
                        <input
                                id="expense"
                                name="expense"
                                value={expense}
                                type="text"
                                onChange={(e) =>
                                        setExpense(
                                                Number(e.target.value) > Number(bill)
                                                        ? bill
                                                        : Number(e.target.value)
                                        )
                                }
                        />

                        <label htmlFor="friend expense">👬 {selectedFriend?.name}'s expense</label>
                        <input
                                id="friend expense"
                                name="expense"
                                value={friendExpense}
                                type="text"
                                disabled
                        />

                        <label htmlFor="payer">🤑Who is paying the bill</label>
                        <select id="payer" name="payer" value={payer} onChange={handlePayerChange}>
                                <option value="me">You</option>
                                <option value={selectedFriend?.name}>{selectedFriend?.name}</option>
                        </select>

                        <Button type="submit">Split bill</Button>
                </form>
        );
};

export default SplitBillForm;
