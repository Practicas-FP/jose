import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  rNum = getRandomRumbers().sort((n1,n2) => n1 - n2).filter((x:number) => x > 10);
  page: number = 1;
  itemsToDisplay: number = 10;

  pageChanged(event: number) {
    this.page = event;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
function getRandomRumbers() {
  let listaNumeros: Array<number> = [];
  for (let i = 0; i <100; i++) {
    listaNumeros.push(Math.floor(Math.random() * 100));
  }
  return listaNumeros;
  //return Math.floor(Math.random() * 10); 
}

