import MMKVStorage from 'react-native-mmkv-storage';
const MMKV = new MMKVStorage.Loader().initialize();

const storageManager = {
    getMap: key => {
        return MMKV.getMap(key);
    },
    setMap: (key, value) => {
        MMKV.setMap(key, value);
    },
    clear: () => {
        MMKV.clearStore();
    },
};

export default storageManager;
