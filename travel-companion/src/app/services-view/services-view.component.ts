import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';
import { NetworkInfoService } from '../services/network-info.service';

@Component({
  selector: 'app-services-view',
  templateUrl: './services-view.component.html',
  standalone: true,
  imports: [CommonModule, JsonPipe]
})
export class ServicesViewComponent {
  cameraImage: string | null = null;
  location: any;
  deviceInfo: any;
  networkInfo: any;

  constructor(
    private cameraService: CameraService,
    private locationService: LocationService,
    private deviceInfoService: DeviceInfoService,
    private networkInfoService: NetworkInfoService
  ) {}

  async ngOnInit() {
    this.cameraImage = (await this.cameraService.takePicture()) ?? null;
    this.location = await this.locationService.getCurrentPosition();
    this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
    this.networkInfo = await this.networkInfoService.getNetworkInfo();
  }
}
