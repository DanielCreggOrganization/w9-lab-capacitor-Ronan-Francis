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
      return {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        accuracy: coordinates.coords.accuracy
      };
    } catch (error) {
      console.error('Error getting location', error);
      throw error;
    }
  }
}