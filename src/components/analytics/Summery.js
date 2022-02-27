import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    BackHandler,
    RefreshControl,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Headline, Provider as PaperProvider } from 'react-native-paper';
import { List } from 'react-native-paper';
import moment from 'moment';
import { StatusBar } from 'react-native';

import globalStyles from '../../assets/stylesheet/global';
import ajax from '../../helpers/ajax';
import { STORAGE } from '../../helpers/Global';
import storageManager from '../../helpers/mmkv-storage';
import PurchaseItem from '../home/purchase/PurchaseItem';

const Summery = ({ navigation }) => {
    StatusBar.setBackgroundColor('#f8ab7f');
    const [pageRefresh, setPageRefresh] = useState(false);
    const accordionItems = [
        {
            title: 'This Week',
            key: 'this_week',
        },
        {
            title: 'This Month',
            key: 'this_month',
        },
        {
            title: 'Overall',
            key: 'overall',
        },
    ];

    navigation.addListener('beforeRemove', e => {
        BackHandler.exitApp();
    });

    const [transactions, setTransactions] = useState({});

    const getDashboardData = () => {
        const storedUser = storageManager.getMap(STORAGE.USER);
        ajax.retrieveDashboardData(storedUser.uid).then(data => {
            setTransactions(data);
            setPageRefresh(false);
        });
    };

    useEffect(() => {
        getDashboardData();
    }, []);

    return (
        <>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={pageRefresh}
                        colors={['#e74c3c', 'cyan']}
                        onRefresh={() => {
                            setPageRefresh(true);
                            getDashboardData();
                        }}
                    />
                }>
                <PaperProvider>
                    <View style={styles.headerBadge}>
                        <Headline
                            style={[
                                globalStyles.textAlignCenter,
                                globalStyles.marB20,
                                globalStyles.text2XLarge,
                                styles.headerHeadline,
                            ]}>
                            Expense for {moment().format('MMMM')}
                        </Headline>
                        <Text style={globalStyles.textMedium}>
                            CA$ &nbsp;
                            {transactions &&
                                transactions['this_month_spending'] &&
                                transactions['this_month_spending'].toFixed(2)}
                        </Text>
                    </View>
                    <List.Section>
                        {accordionItems.map(type => {
                            return (
                                <List.Accordion
                                    key={type.key}
                                    title={type.title}
                                    left={props => (
                                        <List.Icon {...props} icon="folder" />
                                    )}>
                                    {transactions &&
                                        transactions[type.key] &&
                                        transactions[type.key].map(
                                            transaction => {
                                                return (
                                                    <PurchaseItem
                                                        key={transaction.id}
                                                        minimize={true}
                                                        transaction={
                                                            transaction
                                                        }
                                                    />
                                                );
                                            },
                                        )}
                                </List.Accordion>
                            );
                        })}
                    </List.Section>
                </PaperProvider>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
    },
    headerBadge: {
        textAlign: 'center',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f8ab7f',
    },
    headerHeadline: {
        marginTop: 20,
        fontWeight: '700',
    },
});

export default Summery;

{
    /* <List.Item
        key={transaction.id}
        title={
            <View
                style={{
                    width: 300,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent:
                        'space-between',
                }}>
                <Text style={{ flex: 1 }}>
                    {transaction.store.name}
                </Text>
                <Text style={{ flex: 2 }}>
                    CA$ {transaction.amount}
                </Text>
            </View>
        }
    /> */
}
