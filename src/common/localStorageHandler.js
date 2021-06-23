import AsyncStorage from '@react-native-community/async-storage';

export const setAsyncStorageValueWithKey = async (key, value, callback) => {
  AsyncStorage.setItem(key, JSON.stringify(value), (err, result) => {
    return err ? callback(false) : callback(true)
  })
}

export const getAsyncStorageValueWithKey = async (key, callback) => {
  AsyncStorage.getItem(key, (err, result) => {
		return err ? callback(false) : callback(JSON.parse(result))
  })
}

export const clearAsyncStorageKey =  async (key, callback) => {
  AsyncStorage.removeItem(key, (err, result) => {
    return err ? callback(false): callback(true)
  })
}