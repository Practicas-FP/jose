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
    this.esFavorito(this.id);
    console.log(this.esFav);
  }

  esFavorito(animeid: string){
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      data.forEach(element => {
        if(animeid === element.animeid){
          this.esFav = true;
        }
      });
    });
  }

}
