import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import moment from 'moment';
import ActionButton from 'react-native-action-button';

import ajax from '../../helpers/ajax';
import PurchaseList from './purchase/PurchaseList';

const MonthlyPurchase = ({ navigation, route }) => {
    const periodMonth = moment(route.params.period, 'x').format('MMM');
    const periodYear = moment(route.params.period, 'x').format('YYYY');

    const [transactions, setTransactions] = useState([]);

    const navigateToPurchaseAlter = () => {
        navigation.navigate('MonthList');
    };

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
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                onPress={navigateToPurchaseAlter}
            />
        </>
    );
};

export default MonthlyPurchase;
