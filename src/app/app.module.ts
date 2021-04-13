import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { environment } from '../environments/environment';
import { SigninComponent } from './components/signin/signin.component';
import { LetterOutlineCardComponent } from './components/letter-outline-card/letter-outline-card.component';
import { ClassComponent } from './components/class/class.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClassContentComponent } from './components/class/class-content/class-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SigninComponent,
    LetterOutlineCardComponent,
    ClassComponent,
    ClassContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
