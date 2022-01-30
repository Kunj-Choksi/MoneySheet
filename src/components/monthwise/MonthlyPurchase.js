import React, {useEffect, useState} from 'react';

import {View} from 'react-native';

import ajax from '../../helpers/ajax';
import PurchaseList from './purchase/PurchaseList';

import ActionButton from 'react-native-action-button';

const MonthlyPurchase = ({navigation, route}) => {
    const [stores, setStores] = useState([]);

    const navigateToPurchaseAlter = () => {
        navigation.navigate('AlterPurchase');
    };

    useEffect(() => {
        const getStores = () => {
            ajax.getStoreDetails().then(data => {
                setStores(data.contents);
            });
        };

        getStores();
    }, []);

    return (
        <>
            <View style={{flex: 1}}>
                {stores.length > 0 && <PurchaseList list={stores} />}
            </View>
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                onPress={navigateToPurchaseAlter}
            />
        </>
    );
};

export default MonthlyPurchase;
