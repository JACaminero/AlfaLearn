import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  signIn(email:string, psw: string) {
    return this.auth.signInWithEmailAndPassword(email, psw);
  } 
}
