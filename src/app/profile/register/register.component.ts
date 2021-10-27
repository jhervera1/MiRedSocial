import { Component, OnInit } from '@angular/core';
import { registerUser, User } from 'src/app/model/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser: registerUser = {
    name:"",
    lastName:"",
    age:0,
    description:"",
    photo:"",
    mail:"",
    password:"",
    confirmPassword:""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
