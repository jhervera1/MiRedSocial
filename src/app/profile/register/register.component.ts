import { Component, OnInit, Output,EventEmitter } from '@angular/core';
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
}
