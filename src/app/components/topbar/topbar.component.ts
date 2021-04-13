import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less'],
})
export class TopbarComponent implements OnInit {
  userName?: string;
  
  constructor(private auth: AuthService) {
    this.auth.getCurrentUser().then( user => { this.userName = user } )
  }

  ngOnInit() {
  }
}
