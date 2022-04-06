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
  src = '';
  constructor(public authService: AuthServiceService, public photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  async sacarCamara(){
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      const imageUrl = image.webPath;

      // Can be set to the src of an image now
      this.src = imageUrl;
    };
  }

}
