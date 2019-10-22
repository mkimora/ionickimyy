import { Component, Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
@Injectable({
  providedIn:'root'
})
export class AuthPage  {
  loginUser(loginUserData: {}) {
    throw new Error("Method not implemented.");
  }
  host2:string="http://localhost:8000/api/login";
  jwt : string;
  username : string;
  roles : Array<string>;


  constructor(private http: HttpClient,
    private _router: Router) { }

   
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  login(data) :Observable<any> {
    return this.http.post(this.host2,data,{observe:'response'})
  }
  //creons la methode saveToken
  saveToken(jwt:string) {
    localStorage.setItem('token',jwt);
    this.jwt = jwt; 
    this.parseJWT();
  }

  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
    localStorage.setItem('role', objJWT.roles); 
  }

  getRole(){
    return localStorage.getItem('role');
  }

  isADMIN(){
    return this.roles.indexOf('ROLE_ADMIN')>=0;
  }
  
  isUser(){
    return this.roles.indexOf('ROLE_USER')>=0;
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    //pour ne plus avoir besoin de m'authentifier à chaque fois
    this.parseJWT();
  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
