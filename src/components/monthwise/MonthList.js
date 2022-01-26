import moment, {months} from 'moment';
import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableHighlight,
    StyleSheet,
    FlatList,
} from 'react-native';

const MonthList = ({navigation}) => {
    let monthsList = [];
    for (let i = 0; i < 5; i++) {
        monthsList.push({
            name: moment().subtract(i, 'months').format("MMMM 'YY"),
            value: moment().subtract(i, 'months').format('x'),
        });
    }

    const navigateToMonthlyPurchaseList = time => {
        navigation.navigate('MonthlyPurchase', {period: time.value});
    };

    return (
        <View>
            <FlatList
                style={styles.list}
                data={monthsList}
                renderItem={({item}) => (
                    <TouchableHighlight
                        style={styles.listItem}
                        underlayColor="#e3e3e3"
                        onPress={() => {
                            navigateToMonthlyPurchaseList(item);
                        }}>
                        <Text>{item.name}</Text>
                    </TouchableHighlight>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#d3d3d3',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});

export default MonthList;
