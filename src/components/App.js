import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStackNavigator } from './navigation/StackNavigator';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_TOKEN } from '@env';

GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_TOKEN,
});

const App = () => {
    return (
        <>
            <NavigationContainer>
                <LoginStackNavigator />
            </NavigationContainer>
        </>
    );
};
export default App;
