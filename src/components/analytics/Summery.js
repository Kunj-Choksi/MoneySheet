import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    BackHandler,
    RefreshControl,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Headline } from 'react-native-paper';
import { List } from 'react-native-paper';
import moment from 'moment';
import { StatusBar } from 'react-native';
var randomColor = require('randomcolor'); // import the script

import globalStyles from '../../assets/stylesheet/global';
import ajax from '../../helpers/ajax';
import { STORAGE } from '../../helpers/Global';
import storageManager from '../../helpers/mmkv-storage';
import PurchaseItem from '../home/purchase/PurchaseItem';
import Piechart from '../chartKit/Piechart';
import Linechart from '../chartKit/LineChart';

const Summery = ({ navigation }) => {
    StatusBar.setBackgroundColor('#f8ab7f');
    const [pageRefresh, setPageRefresh] = useState(false);
    const [monthlyChartData, setMonthlyChartData] = useState([]);

    const accordionItems = [
        {
            title: 'This Week',
            key: 'this_week',
        },
    ];

    navigation.addListener('beforeRemove', e => {
        BackHandler.exitApp();
    });

    const [transactions, setTransactions] = useState({});

    const getDashboardData = () => {
        const storedUser = storageManager.getMap(STORAGE.USER);
        ajax.retrieveDashboardData(storedUser.uid).then(data => {
            console.log(data);
            setTransactions(data);
            let monthData = data.by_month_sum.sort(
                (a, b) => b.month_index - a.month_index,
            );
            let [labels, dataPoints] = [[], []];
            for (let md of monthData) {
                labels.push(md.month);
                dataPoints.push(md.amount);
            }
            setMonthlyChartData([labels, dataPoints]);

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
                {monthlyChartData && monthlyChartData.length > 0 && (
                    <View style={styles.lineChart}>
                        <Linechart
                            labels={monthlyChartData[0]}
                            dataPoints={monthlyChartData[1]}
                        />
                    </View>
                )}

                <List.Section style={globalStyles.marT10}>
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
                                    transactions[type.key].map(transaction => {
                                        return (
                                            <PurchaseItem
                                                key={transaction.id}
                                                minimize={true}
                                                transaction={transaction}
                                            />
                                        );
                                    })}
                            </List.Accordion>
                        );
                    })}
                </List.Section>
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
    chartContainer: {
        paddingBottom: 70,
    },
    lineChart: {
        marginTop: 30,
        padding: 0,
    },
});

export default Summery;
