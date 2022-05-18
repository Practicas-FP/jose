import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  src: string;
  constructor(public authService: AuthServiceService, public photoService: PhotoService) { }

  async ngOnInit() {
    this.src = localStorage.getItem('icon');
  }

  async sacarCamara(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.src = capturedPhoto.webPath;
  }

}
