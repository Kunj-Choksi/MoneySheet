import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import moment from 'moment';

import ajax from '../../../helpers/ajax';
import PurchaseList from './PurchaseList';

const MonthlyPurchase = ({ navigation, route }) => {
    const periodMonth = moment(route.params.period, 'x').format('MMM');
    const periodYear = moment(route.params.period, 'x').format('YYYY');

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const getTransactions = () => {
            ajax.getTransactions(periodMonth, periodYear).then(data => {
                setTransactions(data.contents);
            });
        };

        getTransactions();
    }, []);

    return (
        <>
            <View style={{ flex: 1 }}>
                {transactions.length > 0 && (
                    <PurchaseList transactions={transactions} />
                )}
            </View>
        </>
    );
};

export default MonthlyPurchase;
