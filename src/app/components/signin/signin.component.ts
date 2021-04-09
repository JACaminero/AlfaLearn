import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  signInForm = new FormGroup({
    user: new FormControl(''),
    psw: new FormControl('')
  }); 
  
  constructor(private auth: AuthService, private router: Router) {}


  ngOnInit(): void {
    
  }

  async onSignIn() {
    let user: string = this.signInForm.get('user')?.value;  
    let psw: string = this.signInForm.get('psw')?.value;  

    await this.auth.signIn(user, psw)
    .then( res => {
      this.router.navigate(['class']);

    });

  }
}
