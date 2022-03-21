import { StyleSheet } from 'react-native';
//@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600;700&display=swap');

const globalStyles = StyleSheet.create({
    pickerStyle: {
        borderWidth: 2,
        borderColor: '#d3d3d3',
        borderRadius: 8,
    },
    flex1: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
        height: '100%',
    },
    fab: {
        position: 'absolute',
        margin: 30,
        right: 0,
        bottom: 0,
        backgroundColor: '#f8ab7f',
    },
    italic: {
        fontStyle: 'italic',
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
    text2XLarge: {
        fontSize: 32,
    },
    textXLarge: {
        fontSize: 28,
    },
    textLarge: {
        fontSize: 24,
    },
    textMedium: {
        fontSize: 20,
    },
    textSm: {
        fontSize: 16,
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    inputText: {
        borderWidth: 2,
        borderColor: '#d3d3d3',
        borderRadius: 10,
        padding: 15,
        fontSize: 15,
    },
    marB20: {
        marginBottom: 20,
    },
    marT10: {
        marginTop: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    overBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
    },
    tag: {
        padding: 15,
        marginTop: 15,
        borderWidth: 3,
        borderColor: '#d3d3d3',
        backgroundColor: '#e3e3e3',
        borderRadius: 20,
        green: {
            borderColor: '#02f20e',
            backgroundColor: '#7cf281',
        },
        red: {
            borderColor: '#fc0303',
            backgroundColor: '#ff6666',
        },
    },
});

export default globalStyles;
