import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import globalStyles from '../../../assets/stylesheet/global';

import ajax from '../../../helpers/ajax';
import storageManager from '../../../helpers/mmkv-storage';
import { STORAGE } from '../../../helpers/Global';
import moment from 'moment';

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

const PurchaseAlter = ({ navigation }) => {
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
        const storedUser = storageManager.getMap(STORAGE.USER);
        ajax.addNewTransaction(
            storedUser.uid,
            data.storeId,
            data.expenseAmount,
            data.date,
            data.type,
        ).then(data => {
            ToastAndroid.show('Added new transaction!', ToastAndroid.SHORT);
            navigation.navigate('Home');
        });
    };

    return (
        <>
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
                    <Text style={globalStyles.marB20}>
                        <Text style={globalStyles.textBold}>
                            Expense Date: &nbsp;
                        </Text>
                        {moment(getValues('date')).format('ddd DD MMM, YYYY')}{' '}
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
                        <Text style={styles.error}>{errors.date.message}</Text>
                    )}
                </View>
                {/* Expense type */}
                <View style={[globalStyles.marB20, globalStyles.pickerStyle]}>
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
                        <Text style={styles.error}>{errors.type.message}</Text>
                    )}
                </View>
            </View>
            {/* Footer button */}
            <View style={styles.bottomStyle}>
                <TouchableOpacity
                    style={styles.submitBtnStyle}
                    onPress={handleSubmit(onSubmit)}>
                    <Text
                        style={{
                            ...globalStyles.textMedium,
                            color: 'white',
                            textAlign: 'center',
                        }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    bottomStyle: {
        alignItems: 'center',
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
