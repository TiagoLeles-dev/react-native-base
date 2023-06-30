import AsyncStorage from '@react-native-async-storage/async-storage';
// <<<----   AsyncStorage  --- >>>>>

export const storageAsync = {
  setItem: async (key, item) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
  },

  getItem: async (key, defaultValue) => {
    try {
      const serializedItem = await AsyncStorage.getItem(key);
      if (serializedItem) {
        const parsedItem = JSON.parse(serializedItem);
        return defaultValue !== undefined && parsedItem === null
          ? defaultValue
          : parsedItem;
      } else {
        return defaultValue;
      }
    } catch (error) {
      console.log(error);
    }
  },

  removeItem: async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  },
};
