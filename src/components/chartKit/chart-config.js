import { Dimensions } from 'react-native';

export default {
    screenWidth: Dimensions.get('window').width,
    config: {
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(0, 63, 130, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    },
};
