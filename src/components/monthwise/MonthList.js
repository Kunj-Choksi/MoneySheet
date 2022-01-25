import moment, {months} from 'moment';
import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';

const MonthList = ({navigation}) => {
    let monthsList = [];
    for (let i = 0; i < 5; i++) {
        monthsList.push({
            name: moment().subtract(i, 'months').format('MMMM \'YY'),
            value: moment().subtract(i, 'months'),
        });
    }

    return (
        <View>
            <FlatList
                style={styles.list}
                data={monthsList}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.listItem}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        paddingTop: 0,
    },
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
