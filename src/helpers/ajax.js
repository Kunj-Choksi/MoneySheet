import axios from 'axios';

const apiHost = 'http://localhost:3000';

export default {
    async getStoreDetails() {
        try {
            const res = await axios.get(
                `${apiHost}/transaction/retrieve_stores`,
            );
            return res.data;
        } catch (error) {
            console.error('myError', error.message);
        }
    },
    async addNewTransaction(storeId, amount, dateTime, purchaseType) {
        const res = await axios.post(`${apiHost}/transaction/add_transaction`, {
            store_id: storeId,
            amount: amount,
            datetime: dateTime,
            purchase_type: purchaseType,
        });

        return res.data;
    },
};
