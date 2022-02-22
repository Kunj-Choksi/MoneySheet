import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { LoginStackNavigator } from './navigation/StackNavigator';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_TOKEN } from '@env';

GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_TOKEN,
});

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <>
            <NavigationContainer>
                <LoginStackNavigator />
            </NavigationContainer>
        </>
    );
};
export default App;
