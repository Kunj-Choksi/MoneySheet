import axios from 'axios';
import { API_HOST } from '@env';
let token = '';

export default {
    setHeaderToken(headerToken) {
        token = `Bearer ${headerToken}`;
    },
    async verifyClient(email, uid) {
        try {
            const res = await axios.post(`${API_HOST}/client/verify_client`, {
                email: email,
                google_uid: uid,
            });
            return res.data;
        } catch (error) {}
    },
    async registerClient(clientObj) {
        try {
            const res = await axios.post(
                `${API_HOST}/client/register_client`,
                clientObj,
            );

            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
    async getStoreDetails() {
        try {
            const res = await axios.get(
                `${API_HOST}/transaction/retrieve_stores`,
                {
                    headers: {
                        Authorization: token,
                    },
                },
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
                    headers: {
                        Authorization: token,
                    },
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
    async addNewTransaction(uid, storeId, amount, dateTime, purchaseType, comments) {
        const res = await axios.post(
            `${API_HOST}/transaction/add_transaction`,
            {
                client_id: uid,
                store_id: storeId,
                amount: amount,
                datetime: dateTime,
                purchase_type: purchaseType,
                comments: comments
            },
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data;
    },

    async retrieveDashboardData(clientId) {
        try {
            const res = await axios.post(
                `${API_HOST}/dashboard/retrieve_dashboard_data`,
                { client_id: clientId },
                {
                    headers: {
                        Authorization: token,
                    },
                },
            );
            return res.data.contents;
        } catch (error) {
            console.log(error);
        }
    },
};
