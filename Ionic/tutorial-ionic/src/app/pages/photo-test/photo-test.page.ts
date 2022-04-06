import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-test',
  templateUrl: './photo-test.page.html',
  styleUrls: ['./photo-test.page.scss'],
})
export class PhotoTestPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
