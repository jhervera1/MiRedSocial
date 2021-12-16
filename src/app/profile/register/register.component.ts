import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { registerUser, User } from 'src/app/model/models';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  clicked:boolean = false;
  registeredUser: registerUser = {
    name:"",
    lastName:"",
    age:0,
    description:"",
    photo:"",
    mail:"",
    password:"",
    confirmPassword:"",
  };

  @Output() confirmedUser:EventEmitter<registerUser> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.clicked = false;
  }

  registerUsers():void{
    this.confirmedUser.emit(this.registeredUser);
    this.registeredUser ={
      name:"",
      lastName:"",
      age:0,
      description:"",
      photo:"",
      mail:"",
      password:"",
      confirmPassword:"",
    }

  }


  changeClicked():void{
    this.clicked = true;
  }

  uploadFile(event:any){
    //fer que es mostri la imatge al pujar-la
    console.log(event)
    this.registeredUser.photo = "data:"+event.target.files[0].type+";base64,"+btoa(event.target.files[0].name);
    console.log(this.registeredUser.photo);
  }



}
