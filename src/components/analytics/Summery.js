import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import globalStyles from '../../assets/stylesheet/global';

const Summery = () => {
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
