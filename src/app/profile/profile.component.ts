import { Component, OnInit } from '@angular/core';
import { registerUser, User } from '../model/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  RegisteredUsers:registerUser[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fetchHardCodedUsers();
  }






  fetchHardCodedUsers():void{
    //"Joel","Hervera",22,"null","Hombre","joelhervera@gmail.com","password"),

    this.RegisteredUsers.push({name:"Joel",lastName:"Hervera",age:22,photo:"",description:"haha cum",mail:"joelhervera@gmail.com",password:"password",confirmPassword:"password"})
    console.log(this.RegisteredUsers);

  }


  addUser(registeredUser:registerUser){
    this.RegisteredUsers.push(registeredUser);
  }

}



//registeredUser model
/*
  name : string,
  lastName : string,
  age:number,
  photo:string,
  description: string,
  mail:string,
  password : string,
  confirmPassword:string;
*/
