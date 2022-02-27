import React from 'react';
import globalStyles from '../../../assets/stylesheet/global';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import moment from 'moment';

const PurchaseItem = ({ navigation, transaction }) => {
    // TODO show model for transaction details
    const showTransactionDetails = () => {};

    return (
        <>
            <TouchableHighlight
                key={transaction.id}
                onPress={showTransactionDetails}
                underlayColor="#e3e3e3">
                <View style={styles.listContainer}>
                    <View style={styles.itemImage}>
                        <Image
                            style={styles.imageLogo}
                            source={{
                                uri: transaction.store.logo_url,
                            }}
                        />
                    </View>
                    <View style={styles.itemInfo}>
                        <View style={styles.itemInfoRow}>
                            <Text
                                style={[
                                    styles.itemTitle,
                                    globalStyles.textBold,
                                ]}>
                                {transaction.store.name}
                            </Text>
                            <Text style={globalStyles.textDanger}>
                                CA $ {transaction.amount}
                            </Text>
                        </View>
                        <View>
                            <Text style={globalStyles.italic}>
                                {transaction.comments}
                            </Text>
                        </View>
                        <View>
                            <Text style={globalStyles.textSemiBold}>
                                {moment(transaction.datetime).format(
                                    'ddd, DD MMM',
                                )}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
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
        padding: 10,
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
        fontSize: 20,
    },
});

export default PurchaseItem;
