import React from 'react';
import { View, StyleSheet, Text, BackHandler } from 'react-native';
import globalStyles from '../../assets/stylesheet/global';

const Summery = ({ navigation }) => {
    navigation.addListener('beforeRemove', e => {
        BackHandler.exitApp();
    });
    return (
        <View style={globalStyles.flex1}>
            <View style={[styles.header, globalStyles.textAlignCenter]}>
                <Text style={[globalStyles.textLarge]}>
                    Your this month gross
                </Text>
                <View style={[globalStyles.tag, globalStyles.tag.red]}>
                    <Text style={globalStyles.text2XLarge}>CA$ 320</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
    },
});

export default Summery;
