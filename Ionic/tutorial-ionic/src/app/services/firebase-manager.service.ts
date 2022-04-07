import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseManagerService {
  tutorialsRef: AngularFireList<any>;
  private dbPath = '';
  private user: any;
  constructor(private db: AngularFireDatabase, private auth: AuthServiceService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user !== null)
    {
      this.dbPath += this.user.uid + '/listafavoritos/';
    }
    this.tutorialsRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<any> {
    return this.tutorialsRef;
  }
  create(tutorial: any): any {

    return this.tutorialsRef.set(tutorial + '', {animeid:tutorial});
  }
  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
  subirFoto(base64: string){
    return this.db.list(this.user.uid).set('icono', {base64img:base64});
  }
  recuperarFoto(): any{
    return this.db.list(this.user.uid + '/icono/');
  }
}
