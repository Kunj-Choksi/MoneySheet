import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_TOKEN } from '@env';

import globalStyles from '../../assets/stylesheet/global';

const Login = () => {
    GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_TOKEN,
    });

    async function getLogin() {
        try {
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
                auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            auth()
                .signInWithCredential(googleCredential)
                .then(res => {
                    console.log(res);
                });
        } catch (error) {
            console.log(error);
        }
        // Get the users ID token
    }
    return (
        <>
            <View style={globalStyles.center}>
                <Text
                    style={[
                        globalStyles.text2XLarge,
                        globalStyles.textAlignCenter,
                        globalStyles.marB20,
                    ]}>
                    To start Get login with Google
                </Text>
                <TouchableHighlight
                    underlayColor="#d3d3d3"
                    style={styles.logoBox}
                    onPress={() => {
                        getLogin();
                    }}>
                    <View style={styles.logoBoxBody}>
                        <Image
                            style={styles.loginLogo}
                            source={require('../../assets/images/google.png')}
                        />
                        <Text style={globalStyles.textLarge}>
                            Login with Google
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    logoBox: {
        width: 350,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#d3d3d3',
        padding: 15,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20,
        shadowColor: '#52006A',
    },
    logoBoxBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginLogo: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginRight: 35,
    },
});

export default Login;
