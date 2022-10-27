import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:UserModel = new UserModel();

  public error: string = "";
  public loggedin: boolean = false;
        
  constructor() { }

  ngOnInit(): void {
  }

  kattint() {
    this.loggedin = false;
    this.error = "";

    if (this.user.username == "admin" &&
          this.user.password == "123") {
            
      this.loggedin = true;
    } else {
      this.error = "Nem megfelelő felhasználónév vagy jelszó!";
    }
  }

  logout() {
    this.loggedin = false;
    this.user.password = "";
    this.error = "";
  }

}
