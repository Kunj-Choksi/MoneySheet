import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Headline,
    Provider as PaperProvider,
    Surface,
} from 'react-native-paper';
import { List } from 'react-native-paper';

import globalStyles from '../../assets/stylesheet/global';
import ajax from '../../helpers/ajax';
import { STORAGE } from '../../helpers/Global';
import storageManager from '../../helpers/mmkv-storage';

const Summery = ({ navigation }) => {
    navigation.addListener('beforeRemove', e => {
        BackHandler.exitApp();
    });

    const [transactions, setTransactions] = useState({});

    useEffect(() => {
        const getDashboardData = () => {
            const storedUser = storageManager.getMap(STORAGE.USER);
            ajax.retrieveDashboardData(storedUser.uid).then(data => {
                setTransactions(data);
            });
        };

        getDashboardData();
    }, []);

    return (
        <>
            <ScrollView>
                <PaperProvider>
                    <View style={styles.headerBadge}>
                        <Headline
                            style={[
                                globalStyles.textAlignCenter,
                                globalStyles.marB20,
                            ]}>
                            This month spending...
                        </Headline>
                        <Surface style={styles.headerSurface}>
                            <Text style={globalStyles.textMedium}>
                                CA$ &nbsp;
                                {transactions &&
                                    transactions['this_month_spending'] &&
                                    transactions['this_month_spending']}
                            </Text>
                        </Surface>
                    </View>
                    <List.Section>
                        <List.Accordion
                            title="This week"
                            left={props => (
                                <List.Icon {...props} icon="folder" />
                            )}>
                            {transactions &&
                                transactions['this_week'] &&
                                transactions['this_week'].map(transaction => {
                                    return (
                                        <List.Item
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
                                        />
                                    );
                                })}
                        </List.Accordion>

                        <List.Accordion
                            title="This Month"
                            left={props => (
                                <List.Icon {...props} icon="folder" />
                            )}
                            onPress={() => {}}>
                            {transactions &&
                                transactions['this_month'] &&
                                transactions['this_month'].map(transaction => {
                                    return (
                                        <List.Item
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
                                        />
                                    );
                                })}
                        </List.Accordion>

                        <List.Accordion
                            title="OverAll"
                            left={props => (
                                <List.Icon {...props} icon="folder" />
                            )}
                            onPress={() => {}}>
                            {transactions &&
                                transactions['overall'] &&
                                transactions['overall'].map(transaction => {
                                    return (
                                        <List.Item
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
                                        />
                                    );
                                })}
                        </List.Accordion>
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
        padding: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerSurface: {
        padding: 8,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
});

export default Summery;
