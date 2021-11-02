import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { registerUser, User } from 'src/app/model/models';
import { Route, Router } from '@angular/router';
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
    confirmPassword:"",
  };
  @Output() confirmedUser:EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  registerUser():void{

    this.confirmedUser.emit();
  }

  checkIfEmpty(user:User):boolean{
    return true;
  }

  fetchIntefaceIntoClass(interfaceUser:registerUser){

    let classUser: User = new User(interfaceUser.name,interfaceUser.lastName,interfaceUser.age,interfaceUser.photo,
      interfaceUser.description,interfaceUser.mail,interfaceUser.password);
    return classUser;

  }


  uploadFile(event:any){
    //fer que es mostri la imatge al pujar-la
    console.log(event)
    this.registeredUser.photo = "data:"+event.target.files[0].type+";base64,"+btoa(event.target.files[0].name);
    console.log(this.registeredUser.photo);
  }
}
