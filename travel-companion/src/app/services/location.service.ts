// src/app/services/location.service.ts
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const locationInfo = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        accuracy: coordinates.coords.accuracy
      };
      console.log('Location Info:', locationInfo);
      return locationInfo;
    } catch (error) {
      console.error('Error getting location', error);
      throw error;
    }
  }
}