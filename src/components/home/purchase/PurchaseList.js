import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { View } from 'react-native';
import PurchaseItem from './PurchaseItem';
import globalStyles from '../../../assets/stylesheet/global';

const PurchaseList = ({ transactions }) => {
    return (
        <>
            <View style={globalStyles.flex1}>
                <ScrollView>
                    {transactions &&
                        transactions.map(transaction => {
                            return <PurchaseItem key={transaction.id} transaction={transaction} />;
                        })}
                </ScrollView>
            </View>
        </>
    );
};

export default PurchaseList;
