import BleManager from 'react-native-ble-manager';

import { NativeModules, Platform } from 'react-native';
export async function blestart() {
    BleManager.start({ showAlert: false }).then(() => {
        // Success code
        console.log("Module initialized");
      });
}
