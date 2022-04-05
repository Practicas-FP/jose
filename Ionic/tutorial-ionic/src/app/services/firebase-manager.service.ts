import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseManagerService {
  tutorialsRef: AngularFireList<any>;
  private dbPath = '/listafavoritos/';
  constructor(private db: AngularFireDatabase, private auth: AuthServiceService) {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user !== null)
    {
      this.dbPath += user.uid;
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
}
