import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class NetworkInfoService {

  constructor() { }
  
  async getNetworkInfo(){
    // Use Capacitor Network API to get network information
    const status = await Network.getStatus();
    const connectionType = status.connectionType;
    const isConnected = status.connected;
    const isWifi = status.connectionType === 'wifi';
    const isMobile = status.connectionType === 'cellular';
    const isOffline = !status.connected;

    const networkInfo = {
      connectionType: connectionType,
      isConnected: isConnected,
      isWifi: isWifi,
      isMobile: isMobile,
      isOffline: isOffline
    };

    return networkInfo;
  }
}
