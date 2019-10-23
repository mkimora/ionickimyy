import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPage } from '../auth/auth.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthPage,
    private _router: Router) { }

  ngOnInit() {
  }

  onLogin(data){
    this._auth.login(data)
      .subscribe(resp=>{
        let jwt = resp.headers.get('Authorization');
        this._auth.saveToken(jwt);
        this._router.navigateByUrl('home')
      },err=>{

      })
  }

  loginUser(data) {
    this._auth.login(data)
      .subscribe(
        res => {console.log(res)
        localStorage.setItem('token' ,res.token)
        this._router.navigateByUrl('home')
      } ,
        err => console.log(err)
      )
  }
  

  isADMIN(){
    return this._auth.isADMIN();
  }

  isUser(){
    return this._auth.isUser();
  }

}
