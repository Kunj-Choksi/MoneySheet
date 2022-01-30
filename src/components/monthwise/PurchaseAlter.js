import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import globalStyles from '../../assets/stylesheet/global';

import ajax from '../../helpers/ajax';

export default function PurchaseAlter() {
    const [stores, setStores] = useState([]);
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        },
    });

    useEffect(() => {
        const getStores = () => {
            ajax.getStoreDetails().then(data => {
                setStores(data.contents);
            });
        };

        getStores();
    }, []);

    const onSubmit = data => console.log(data);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.marB20}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={[globalStyles.inputText]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Search for store.."
                            accessibilityHint="Search for store.."
                        />
                    )}
                    name="firstName"
                />
                {errors.firstName && <Text>This is required.</Text>}
            </View>
            <View style={globalStyles.marB20}>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            placeholder="Expense amount"
                            keyboardType="numeric"
                            style={[
                                globalStyles.inputText,
                                globalStyles.marB20,
                            ]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="lastName"
                />

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
