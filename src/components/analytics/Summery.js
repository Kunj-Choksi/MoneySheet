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

const Summery = ({ navigation }) => {
    StatusBar.setBackgroundColor('#f8ab7f');
    const [pageRefresh, setPageRefresh] = useState(false);
    let [pieChartData, setPieChartData] = useState([]);
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
            let pieChartDataMap = {};
            for (let tran of data.this_month) {
                if (pieChartDataMap[tran.store.name] == undefined) {
                    pieChartDataMap[tran.store.name] = {
                        name: tran.store.name,
                        population: 0,
                        color: randomColor(),
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                    };
                }

                pieChartDataMap[tran.store.name].population += tran.amount;
            }
            let sortedPieChartData = Object.values(pieChartDataMap)
                ? Object.values(pieChartDataMap).sort(
                      (a, b) => b.population - a.population,
                  )
                : [];
            setPieChartData(Object.values(sortedPieChartData));
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
                <View style={styles.chartContainer}>
                    <View style={{ ...globalStyles.center, marginVertical: 10 }}>
                        <Text
                            style={[
                                globalStyles.textLarge,
                                globalStyles.textBold,
                            ]}>
                            Mostly spent on
                        </Text>
                    </View>
                    <View>
                        {pieChartData.length > 0 && (
                            <Piechart data={pieChartData} />
                        )}
                    </View>
                </View>
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
});

export default Summery;
