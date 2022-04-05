import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FirebaseManagerService } from 'src/app/services/firebase-manager.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;
  esFav = false;
  id = '';

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService,
    private db: FirebaseManagerService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.movieService.getDetails(this.id).subscribe(result => {
      this.information = result;
    });
    this.esFavorito();
    console.log('onInit');
  }

  esFavorito(){
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      const favs = data;
      console.log(data);
      favs.forEach(element => {
        console.log(this.id + 'vs' + element.animeid + 'as');
        if(this.id === element.key){
          this.esFav = true;
          console.log(this.esFav);
        }
      });
    });
  }

  guardarAnime(animeid: string): void {
    this.db.create(animeid).then(() => {
      console.log('Created new item successfully!');
      this.esFav = true;
    });
  }

   borrarFavorito(animeid: string): void {
    this.db.delete(animeid + '').then(() => {
      console.log('Deleted item successfully!');
      this.esFav = false;
    });
  }

}
