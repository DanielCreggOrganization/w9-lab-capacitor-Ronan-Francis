// src/app/services/device-info.service.ts
import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  constructor() { }

  async getDeviceInfo() {
    const info = await Device.getInfo();
    const batteryInfo = await Device.getBatteryInfo();
    const languageCode = await Device.getLanguageCode();

    const deviceInfo = {
      model: info.model,
      platform: info.platform,
      operatingSystem: info.operatingSystem,
      osVersion: info.osVersion,
      manufacturer: info.manufacturer,
      isVirtual: info.isVirtual,
      batteryLevel: batteryInfo.batteryLevel,
      isCharging: batteryInfo.isCharging,
      languageCode: languageCode.value
    };

    return deviceInfo;
  }
}