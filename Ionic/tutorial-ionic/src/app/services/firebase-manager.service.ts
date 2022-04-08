import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseManagerService {
  direccionDB: AngularFireList<any>;
  private dbPath = '';
  private user: any;
  constructor(private db: AngularFireDatabase, private auth: AuthServiceService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user !== null)
    {
      this.dbPath += this.user.uid + '/listafavoritos/';
    }
    this.direccionDB = db.list(this.dbPath);
  }
  getAll(): AngularFireList<any> {
    return this.direccionDB;
  }
  create(codigoAnime: any): any {
    return this.direccionDB.set(codigoAnime + '', {animeid:codigoAnime});
  }
  update(key: string, value: any): Promise<void> {
    return this.direccionDB.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.direccionDB.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.direccionDB.remove();
  }
  subirFoto(base64: string){
    return this.db.list(this.user.uid).set('icono', {base64img:base64});
  }
  recuperarFoto(): AngularFireList<any>{
    return this.db.list(this.user.uid + '/icono/');
  }
}
