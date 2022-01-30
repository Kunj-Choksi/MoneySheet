import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    textDanger: {
        color: 'red',
    },
    textSemiBold: {
        fontWeight: '500',
    },
    textBold: {
        fontWeight: '600',
    },
    inputText: {
        borderWidth: 2,
        borderColor: '#d3d3d3',
        borderRadius: 10,
        padding: 15,
        fontSize: 15
    },
    marB20: {
        marginBottom: 20,
    },
});

export default globalStyles;
