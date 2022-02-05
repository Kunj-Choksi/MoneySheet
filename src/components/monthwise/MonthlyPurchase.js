import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import ajax from '../../helpers/ajax';
import PurchaseList from './purchase/PurchaseList';

import ActionButton from 'react-native-action-button';

const MonthlyPurchase = ({ navigation, route }) => {
    const [transactions, setTransactions] = useState([]);

    const navigateToPurchaseAlter = () => {
        navigation.navigate('AlterPurchase');
    };

    useEffect(() => {
        const getTransactions = () => {
            ajax.getTransactions().then(data => {
                console.log(data);
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
