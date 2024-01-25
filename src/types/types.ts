export type IFriend = {
        id: number;
        name: string;
        image: string;
        balance: number;
};

export type ISplitBillForm = {
        bill: number | string;
        expense: number | string;
        payer: string;
};
