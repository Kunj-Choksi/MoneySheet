import React from 'react';
import moment from 'moment';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    FlatList,
} from 'react-native';
import { FAB } from 'react-native-paper';
import globalStyles from '../../assets/stylesheet/global';

const Home = ({ navigation }) => {
    const navigateToPurchaseAlter = () => {
        navigation.navigate('AlterPurchase');
    };

    let monthsList = [];
    for (let i = 0; i < 5; i++) {
        monthsList.push({
            name: moment().subtract(i, 'months').format("MMMM 'YY"),
            value: moment().subtract(i, 'months').format('x'),
        });
    }

    const navigateToMonthlyPurchaseList = time => {
        navigation.navigate('MonthlyPurchase', {
            period: time.value,
            title: time.name,
        });
    };

    return (
        <>
            <View>
                <FlatList
                    style={styles.list}
                    data={monthsList}
                    renderItem={({ item }) => (
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
            <FAB
                style={globalStyles.fab}
                large
                color="#554ea7"
                icon="plus"
                onPress={() => navigateToPurchaseAlter()}
            />
        </>
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

export default Home;
