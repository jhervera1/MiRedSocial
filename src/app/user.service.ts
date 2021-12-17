import { Injectable } from '@angular/core';
import { registerUser } from './model/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList : registerUser[]=[];

  constructor() {

    this.fillLocalStorage();
    this.fetchUsers();

   }

  setUser(user:registerUser[]){
    this.userList = user;
  }

  getUser(){
    return this.userList;
  }


  fetchUsers(){
    this.userList = JSON.parse(localStorage.getItem('users')!);
  }

  saveUsers(){
    localStorage.setItem('users',JSON.stringify(this.userList));
  }

  fillLocalStorage(){
    localStorage.setItem('users',JSON.stringify([{name:"Joel",lastName:"Hervera",age:22,photo:"",description:"haha cum",mail:"joelhervera@gmail.com",password:"password",confirmPassword:"password"}]));
  }
}
