import { EntradaService } from './../shared/services/entrada.service';
import { FirestoreManagerService } from './../shared/services/firestore-manager.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-listado-favoritos',
  templateUrl: './listado-favoritos.component.html',
  styleUrls: ['./listado-favoritos.component.scss']
})
export class ListadoFavoritosComponent implements OnInit {
  public favoritos:any;
  public listaFavoritos: any;
  public listado: any[] = [];
  constructor(public db: FirestoreManagerService, public entrada: EntradaService) { }

  ngOnInit(): void {
    this.recuperarFavoritos();
  }

  recuperarFavoritos(): void {
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.favoritos = data;
      console.log(JSON.stringify(this.favoritos));
      console.log(data)

      data.forEach(element => {
        console.log(element.animeid)
        this.recuperarEntradas(element.animeid);
      });
      console.log('Listado: ')
      console.log(this.listado)
    });
  }

  public recuperarEntradas(animeid: string): void {
    this.entrada.recuperarEntradaPorId(animeid).subscribe(
      (data) => {
        //this.listaFavoritos = data.data;
        this.listado.push(data.data);
      },
      (error) => {
        console.log('error')
      },
      () => {

      }
    );
  }

  public recuperarEntrada(): any {
    let test = JSON.parse(this.favoritos)
    console.log(JSON.stringify(test))
    console.log('hola')
    console.log(JSON.stringify(this.favoritos));
    test.forEach((element: any) => {
      console.log(element.animeid)
      console.log('uno añadido')
    });
    for(var i = 0; i < test.length; i++)
    {
      console.log(i);
    }
  }

}
