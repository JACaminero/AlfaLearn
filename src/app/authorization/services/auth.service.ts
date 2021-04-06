import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  googleAuth() {
    return this.http.get(environment.auth0Domain + '/authorize?', {
      params: {
        'response_type': 'token',
        client_id: environment.auth0ClientId,
        connection: 'google-oauth2',
        redirect_uri: environment.herokuDomain  
      }
    })
  }
}
