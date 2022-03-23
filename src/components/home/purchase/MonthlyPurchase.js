import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import moment from 'moment';

import ajax from '../../../helpers/ajax';
import PurchaseList from './PurchaseList';
import Global from '../../../helpers/Global';
import Piechart from '../../chartKit/Piechart';
import { ScrollView } from 'react-native-gesture-handler';

const MonthlyPurchase = ({ navigation, route }) => {
    const periodMonth = moment(route.params.period, 'x').format('M');
    const periodYear = moment(route.params.period, 'x').format('YYYY');

    const [transactions, setTransactions] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        const getTransactions = () => {
            ajax.getTransactions(periodMonth, periodYear).then(data => {
                setTransactions(data.contents.transactions);

                let pieChartData = [];
                let index = 0;

                for (let catInfo of data.contents.category_wise) {
                    if (catInfo[1]) {
                        let obj = {
                            name: `$ (${catInfo[0]})`,
                            amount: parseFloat(catInfo[1].toFixed(2)),
                            color: Global.COLORS[index],
                            legendFontColor: '#333',
                            legendFontSize: 12,
                        };
                        pieChartData.push(obj);
                        index++;
                        if (index == data.contents.category_wise.length) {
                            index = 0;
                        }
                    }
                }
                setCategoryData(pieChartData);
            });
        };

        getTransactions();
    }, []);

    return (
        <>
            <ScrollView>
                <View style={styles.chartContainer}>
                    {categoryData && categoryData.length > 0 && (
                        <Piechart data={categoryData} />
                    )}
                </View>
                <View style={{ flex: 1 }}>
                    {transactions.length > 0 && (
                        <PurchaseList transactions={transactions} />
                    )}
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#d3d3d3',
    },
});

export default MonthlyPurchase;
