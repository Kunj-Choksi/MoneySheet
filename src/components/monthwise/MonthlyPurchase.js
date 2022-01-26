import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyles from '../../assets/stylesheet/global';
import ActionButton from 'react-native-action-button';

const MonthlyPurchase = ({navigation, route}) => {
    console.log(route.params.period);

    // TODO show model for purchase details
    const showPurchaseDetails = () => {};

    const navigateToPurchaseAlter = () => {
        navigation.navigate('AlterPurchase');
    };
    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <TouchableHighlight
                        onPress={showPurchaseDetails}
                        underlayColor="#e3e3e3">
                        <View style={styles.listContainer}>
                            <View style={styles.itemImage}>
                                <Image
                                    style={styles.imageLogo}
                                    source={require('../../assets/images/freshco.png')}
                                />
                            </View>
                            <View style={styles.itemInfo}>
                                <View style={styles.itemInfoRow}>
                                    <Text
                                        style={[
                                            styles.itemTitle,
                                            globalStyles.textBold,
                                        ]}>
                                        Fresh Co
                                    </Text>
                                    <Text style={globalStyles.textDanger}>
                                        $ -34.5
                                    </Text>
                                </View>
                                <View>
                                    <Text style={globalStyles.textSemiBold}>
                                        On 10th Jan, 2021
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.listContainer}>
                        <View style={styles.itemImage}>
                            <Image
                                style={styles.imageLogo}
                                source={require('../../assets/images/freshco.png')}
                            />
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoRow}>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        globalStyles.textBold,
                                    ]}>
                                    Fresh Co
                                </Text>
                                <Text style={globalStyles.textDanger}>
                                    $ -34.5
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.textSemiBold}>
                                    On 10th Jan, 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.itemImage}>
                            <Image
                                style={styles.imageLogo}
                                source={require('../../assets/images/freshco.png')}
                            />
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoRow}>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        globalStyles.textBold,
                                    ]}>
                                    Fresh Co
                                </Text>
                                <Text style={globalStyles.textDanger}>
                                    $ -34.5
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.textSemiBold}>
                                    On 10th Jan, 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.itemImage}>
                            <Image
                                style={styles.imageLogo}
                                source={require('../../assets/images/freshco.png')}
                            />
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoRow}>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        globalStyles.textBold,
                                    ]}>
                                    Fresh Co
                                </Text>
                                <Text style={globalStyles.textDanger}>
                                    $ -34.5
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.textSemiBold}>
                                    On 10th Jan, 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.itemImage}>
                            <Image
                                style={styles.imageLogo}
                                source={require('../../assets/images/freshco.png')}
                            />
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoRow}>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        globalStyles.textBold,
                                    ]}>
                                    Fresh Co
                                </Text>
                                <Text style={globalStyles.textDanger}>
                                    $ -34.5
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.textSemiBold}>
                                    On 10th Jan, 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.itemImage}>
                            <Image
                                style={styles.imageLogo}
                                source={require('../../assets/images/freshco.png')}
                            />
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoRow}>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        globalStyles.textBold,
                                    ]}>
                                    Fresh Co
                                </Text>
                                <Text style={globalStyles.textDanger}>
                                    $ -34.5
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.textSemiBold}>
                                    On 10th Jan, 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.itemImage}>
                            <Image
                                style={styles.imageLogo}
                                source={require('../../assets/images/freshco.png')}
                            />
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoRow}>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        globalStyles.textBold,
                                    ]}>
                                    Fresh Co
                                </Text>
                                <Text style={globalStyles.textDanger}>
                                    $ -34.5
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.textSemiBold}>
                                    On 10th Jan, 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.itemImage}>
                            <Image
                                style={styles.imageLogo}
                                source={require('../../assets/images/freshco.png')}
                            />
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoRow}>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        globalStyles.textBold,
                                    ]}>
                                    Fresh Co
                                </Text>
                                <Text style={globalStyles.textDanger}>
                                    $ -34.5
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.textSemiBold}>
                                    On 10th Jan, 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.itemImage}>
                            <Image
                                style={styles.imageLogo}
                                source={require('../../assets/images/freshco.png')}
                            />
                        </View>
                        <View style={styles.itemInfo}>
                            <View style={styles.itemInfoRow}>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        globalStyles.textBold,
                                    ]}>
                                    Fresh Co
                                </Text>
                                <Text style={globalStyles.textDanger}>
                                    $ -34.5
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.textSemiBold}>
                                    On 10th Jan, 2021
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={navigateToPurchaseAlter}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
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

export default MonthlyPurchase;
