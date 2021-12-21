import { Component, OnInit } from '@angular/core';
import { registerUser, User } from '../model/models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  RegisteredUsers:registerUser[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.RegisteredUsers = this.userService.getUser();
    console.log(this.RegisteredUsers)
  }

  addUser(registeredUser:registerUser){
    this.RegisteredUsers.push(registeredUser);
    this.userService.setUser(this.RegisteredUsers);
    this.userService.saveUsers();
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
