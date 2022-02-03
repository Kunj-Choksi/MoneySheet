import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';

import globalStyles from '../../assets/stylesheet/global';

import ajax from '../../helpers/ajax';

const schema = yup.object().shape({
    storeId: yup.number().required(),
    expenseAmount: yup.number().required(),
    date: yup.date().required(),
    type: yup.number().required(),
});

const defaultValues = {
    storeId: null,
    expenseAmount: 0,
    date: new Date(),
    type: 0,
};

export default function PurchaseAlter({ navigation }) {
    const [stores, setStores] = useState([]);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

    const { control, handleSubmit, errors, setValue, getValues, onChange } =
        useForm({
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

    const onSubmit = data => {
        ajax.addNewTransaction(
            data.storeId,
            data.expenseAmount,
            data.date,
            data.type,
        ).then(data => {
            //FIXME check toast
            Toast.show({
                type: 'success',
                text1: 'Done Sire!!',
                text2: data.message,
            });
            navigation.navigate('MonthlyPurchase');
        });
    };

    return (
        <View style={globalStyles.container}>
            {/* Store Id */}
            <View style={globalStyles.marB20}>
                <Controller
                    control={control}
                    name="storeId"
                    defaultValue={defaultValues.storeId}
                    render={({ value }) => (
                        <View>
                            <Picker
                                selectedValue={value}
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
                    <Text style={styles.error}>{errors.storeId.message}</Text>
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
                            placeholder="Expense amount"
                            keyboardType="numeric"
                            onChangeText={text => {
                                setValue('expenseAmount', text, true);
                            }}
                            style={globalStyles.inputText}
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
                <Text
                    onPress={() => {
                        setIsDatePickerVisible(!isDatePickerVisible);
                    }}>
                    Select Expense Date
                </Text>
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
                    <Text style={styles.error}>{errors.date.message}</Text>
                )}
            </View>
            {/* Expense type */}
            <View style={globalStyles.marB20}>
                <Controller
                    control={control}
                    name="type"
                    defaultValue={defaultValues.type}
                    render={({ value }) => (
                        <View>
                            <Picker
                                selectedValue={value}
                                onValueChange={itemValue =>
                                    setValue('type', itemValue, true)
                                }>
                                <Picker.Item
                                    key={0}
                                    label="Expense"
                                    value={0}
                                />
                                <Picker.Item key={1} label="Income" value={1} />
                            </Picker>
                        </View>
                    )}
                />
                {errors?.type?.message && (
                    <Text style={styles.error}>{errors.type.message}</Text>
                )}
            </View>
            {/* Footer button */}
            <View style={styles.bottomStyle}>
                <Button
                    color="orange"
                    title="Submit"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
