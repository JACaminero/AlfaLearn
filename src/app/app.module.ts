import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { environment } from '../environments/environment';
import { SigninComponent } from './components/signin/signin.component';
import { CardComponent } from './components/card/card.component';
import { ClassComponent } from './components/class/class.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClassbuttonComponent } from './components/classbutton/classbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SigninComponent,
    CardComponent,
    ClassComponent,
    ClassbuttonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireAnalyticsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
