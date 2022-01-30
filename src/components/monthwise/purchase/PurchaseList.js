import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyles from '../../../assets/stylesheet/global';

import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';

const PurchaseList = ({list}) => {
    // TODO show model for purchase details
    const showPurchaseDetails = () => {};

    return (
        <>
            <View style={{flex: 1}}>
                <ScrollView>
                    {list.map(store => {
                        return (
                            <TouchableHighlight
                                onPress={showPurchaseDetails}
                                underlayColor="#e3e3e3">
                                <View style={styles.listContainer}>
                                    <View style={styles.itemImage}>
                                        <Image
                                            style={styles.imageLogo}
                                            source={{uri: store.logo_url}}
                                        />
                                    </View>
                                    <View style={styles.itemInfo}>
                                        <View style={styles.itemInfoRow}>
                                            <Text
                                                style={[
                                                    styles.itemTitle,
                                                    globalStyles.textBold,
                                                ]}>
                                                {store.name}
                                            </Text>
                                            <Text
                                                style={globalStyles.textDanger}>
                                                $ -34.5
                                            </Text>
                                        </View>
                                        <View>
                                            <Text
                                                style={
                                                    globalStyles.textSemiBold
                                                }>
                                                On 10th Jan, 2021
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        );
                    })}
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    listContainer: {
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#d3d3d3',
    },
    itemImage: {
        marginRight: 35,
        flex: 1,
    },
    imageLogo: {
        resizeMode: 'contain',
        width: 130,
        height: 100,
    },
    itemInfo: {
        flex: 2,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        padding: 10,
    },
    itemInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontSize: 25,
    },
});

export default PurchaseList;
