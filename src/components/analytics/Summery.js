import React from 'react';
import { View, StyleSheet, Text, BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Headline,
    Provider as PaperProvider,
    Surface,
} from 'react-native-paper';
import { List } from 'react-native-paper';
import globalStyles from '../../assets/stylesheet/global';

const Summery = ({ navigation }) => {
    navigation.addListener('beforeRemove', e => {
        BackHandler.exitApp();
    });
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
                            <Text style={globalStyles.textMedium}>CA$ 509</Text>
                        </Surface>
                    </View>
                    <List.Section>
                        <List.Accordion
                            title="This week"
                            left={props => (
                                <List.Icon {...props} icon="folder" />
                            )}>
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>

                        <List.Accordion
                            title="This Month"
                            left={props => (
                                <List.Icon {...props} icon="folder" />
                            )}
                            onPress={() => {}}>
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>

                        <List.Accordion
                            title="OverAll"
                            left={props => (
                                <List.Icon {...props} icon="folder" />
                            )}
                            onPress={() => {}}>
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
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
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
});

export default Summery;
