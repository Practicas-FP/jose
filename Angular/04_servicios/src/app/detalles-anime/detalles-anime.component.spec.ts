import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAnimeComponent } from './detalles-anime.component';

describe('DetallesAnimeComponent', () => {
  let component: DetallesAnimeComponent;
  let fixture: ComponentFixture<DetallesAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
