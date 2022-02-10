import axios from 'axios';
import { API_HOST } from '@env';

export default {
    async getStoreDetails() {
        try {
            const res = await axios.get(
                `${API_HOST}/transaction/retrieve_stores`,
            );
            return res.data;
        } catch (error) {
            console.error('myError', error.message);
        }
    },
    async getTransactions(periodMonth, periodYear) {
        try {
            const res = await axios.get(
                `${API_HOST}/transaction/retrieve_transactions`,
                {
                    params: {
                        periodMonth: periodMonth,
                        periodYear: periodYear,
                    },
                },
            );

            return res.data;
        } catch (error) {
            console.error('myError', error.message);
        }
    },
    async addNewTransaction(storeId, amount, dateTime, purchaseType) {
        const res = await axios.post(
            `${API_HOST}/transaction/add_transaction`,
            {
                store_id: storeId,
                amount: amount,
                datetime: dateTime,
                purchase_type: purchaseType,
            },
        );

        return res.data;
    },
    async registerUser(userObj) {
        try {
            const res = await axios.post(
                `${API_HOST}/user/register_user`,
                userObj,
            );

            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
};
