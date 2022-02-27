import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Button, StyleSheet, ToastAndroid } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';

import globalStyles from '../../../assets/stylesheet/global';
import ajax from '../../../helpers/ajax';
import storageManager from '../../../helpers/mmkv-storage';
import { STORAGE } from '../../../helpers/Global';

const schema = yup.object().shape({
    storeId: yup.number().required(),
    expenseAmount: yup.number().required(),
    date: yup.date().required(),
    type: yup.number().required(),
    comments: yup.string(),
});

const defaultValues = {
    storeId: null,
    expenseAmount: 0,
    date: new Date(),
    type: 0,
    comments: '',
};

const PurchaseAlter = ({ navigation }) => {
    const [stores, setStores] = useState([]);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const expenseRef = useRef();

    const { control, errors, setValue, getValues } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const getStores = () => {
            ajax.getStoreDetails().then(data => {
                setStores(data.contents);
            });
        };

        getStores();
    }, []);

    const onSubmit = () => {
        if (getValues('expenseAmount') == 0) {
            ToastAndroid.show('Amount must be more 0', ToastAndroid.SHORT);
            expenseRef.current.focus();
            return;
        }
        const storedUser = storageManager.getMap(STORAGE.USER);
        ajax.addNewTransaction(
            storedUser.uid,
            getValues('storeId'),
            getValues('expenseAmount'),
            getValues('date'),
            getValues('type'),
            getValues('comments'),
        ).then(data => {
            ToastAndroid.show('Added new transaction!', ToastAndroid.SHORT);
            navigation.navigate('Home');
        });
    };

    return (
        <>
            <ScrollView>
                <View style={globalStyles.container}>
                    <View style={globalStyles.marB20}>
                        <Controller
                            control={control}
                            name="storeId"
                            render={({ value }) => (
                                <View style={globalStyles.pickerStyle}>
                                    <Picker
                                        selectedValue={getValues('storeId')}
                                        onValueChange={itemValue =>
                                            setValue('storeId', itemValue, true)
                                        }>
                                        {stores.map(store => {
                                            return (
                                                <Picker.Item
                                                    key={store.id}
                                                    label={store.name}
                                                    value={store.id}
                                                />
                                            );
                                        })}
                                    </Picker>
                                </View>
                            )}
                        />
                        {errors?.storeId?.message && (
                            <Text style={styles.error}>
                                {errors.storeId.message}
                            </Text>
                        )}
                    </View>
                    {/* Expense amount */}
                    <View style={globalStyles.marB20}>
                        <Controller
                            control={control}
                            name="expenseAmount"
                            defaultValue={defaultValues.expenseAmount}
                            render={({ value }) => (
                                <TextInput
                                    ref={expenseRef}
                                    placeholder="Expense amount"
                                    keyboardType="numeric"
                                    onChangeText={text => {
                                        setValue('expenseAmount', text, true);
                                    }}
                                    value={value}
                                />
                            )}
                        />
                        {errors?.expenseAmount?.message && (
                            <Text>{errors.expenseAmount.message}</Text>
                        )}
                    </View>
                    {/* Expense date select text */}
                    <View style={globalStyles.marB20}>
                        <Text style={globalStyles.marB20}>
                            <Text style={globalStyles.textBold}>
                                Expense Date: &nbsp;
                            </Text>
                            {moment(getValues('date')).format(
                                'ddd DD MMM, YYYY',
                            )}{' '}
                        </Text>
                        <Button
                            onPress={() => {
                                setIsDatePickerVisible(!isDatePickerVisible);
                            }}
                            title="Select Expense Date"></Button>
                    </View>
                    {/* Expense date selector */}
                    <View style={globalStyles.marB20}>
                        <Controller
                            control={control}
                            name="date"
                            defaultValue={defaultValues.date}
                            render={({ value }) => (
                                <View>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="date"
                                        onConfirm={date => {
                                            setValue('date', date, true);
                                            setIsDatePickerVisible(
                                                !isDatePickerVisible,
                                            );
                                        }}
                                        onCancel={() => {
                                            setIsDatePickerVisible(
                                                !isDatePickerVisible,
                                            );
                                        }}
                                    />
                                </View>
                            )}
                        />
                        {errors?.date?.message && (
                            <Text style={styles.error}>
                                {errors.date.message}
                            </Text>
                        )}
                    </View>
                    {/* Expense type */}
                    <View
                        style={[globalStyles.marB20, globalStyles.pickerStyle]}>
                        <Controller
                            control={control}
                            name="type"
                            defaultValue={defaultValues.type}
                            render={({ value }) => (
                                <View>
                                    <Picker
                                        selectedValue={getValues('type')}
                                        onValueChange={itemValue =>
                                            setValue('type', itemValue, true)
                                        }>
                                        <Picker.Item
                                            key={0}
                                            label="Expense"
                                            value={0}
                                        />
                                        <Picker.Item
                                            key={1}
                                            label="Income"
                                            value={1}
                                        />
                                    </Picker>
                                </View>
                            )}
                        />
                        {errors?.type?.message && (
                            <Text style={styles.error}>
                                {errors.type.message}
                            </Text>
                        )}
                    </View>
                    {/* Expense comments */}
                    <View style={[globalStyles.marB20]}>
                        <Controller
                            control={control}
                            name="comments"
                            defaultValue={defaultValues.comments}
                            render={({ value }) => (
                                <TextInput
                                    multiline
                                    placeholder="Comments"
                                    onChangeText={text => {
                                        setValue('comments', text, true);
                                    }}
                                    value={value}
                                />
                            )}
                        />
                        {errors?.comments?.message && (
                            <Text style={styles.error}>
                                {errors.comments.message}
                            </Text>
                        )}
                    </View>
                </View>
            </ScrollView>
            {/* Footer button */}
            <FAB
                style={globalStyles.fab}
                large
                color="#554ea7"
                icon="check"
                onPress={() => onSubmit()}
            />
        </>
    );
};

const styles = StyleSheet.create({
    bottomStyle: {
        alignItems: 'flex-end',
        bottom: 30,
    },
    submitBtnStyle: {
        width: 300,
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: 'rgba(231,76,60,1)',
        borderRadius: 15,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20,
        shadowColor: '#52006A',
    },
});
export default PurchaseAlter;
