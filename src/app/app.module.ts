import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { SigninComponent } from './authorization/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.auth0Domain,
      clientId: environment.auth0ClientId
    }),
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
