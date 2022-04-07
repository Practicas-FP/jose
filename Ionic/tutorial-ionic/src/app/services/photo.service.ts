import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Dir } from 'fs';
import { AuthServiceService, User } from './auth-service.service';
import { FirebaseManagerService } from './firebase-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  public photo: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private PHOTO_STORAGE = 'photos';
  constructor(public authService: AuthServiceService, public db: FirebaseManagerService) { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Save the picture and add it to photo collection
    //this.readAsBase64(capturedPhoto).then(result => { }).catch(error => console.log());
    const base64Data = await this.readAsBase64(capturedPhoto);
    this.photo = base64Data;
    console.log(this.photo);
    console.log();
    localStorage.setItem('icon', base64Data);
    this.db.subirFoto(base64Data);
    this.db.recuperarFoto().snapshotChanges().subscribe(data => {
      const fotoRecuperada = data;
      console.log(data[0]);
    });;
    console.log();
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value) || [];

    // Display the photo by reading into base64 format
    for (const photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
    // more to come...
  }

  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);
    this.photo = base64Data;
    console.log(photo);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
