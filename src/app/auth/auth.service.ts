import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {  }

  signIn(email: string, psw: string) {
    return this.auth.signInWithEmailAndPassword(email, psw);
  }

  async getCurrentUser(): Promise<string> {
    let currentUserEmail: string | undefined = "";
    await this.auth.currentUser.then((user) => {
      if(user) {
        currentUserEmail = user.email?.toString();
        console.log(user.email)
      }
    }); 

    return currentUserEmail;
  }
}
