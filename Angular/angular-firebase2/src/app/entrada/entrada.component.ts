import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {
  @Input()
  public entrada!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
