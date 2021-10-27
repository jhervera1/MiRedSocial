import { Component, OnInit } from '@angular/core';
import { User } from '../model/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  RegisteredUsers:User[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fetchHardCodedUsers();
  }






  fetchHardCodedUsers():void{
    this.RegisteredUsers.push(new User("Joel","Hervera",22,"null","Hombre","joelhervera@gmail.com","password"),new User("Oriol","Nadal",20,"null","Hombre","oriolnadal@gmail.com","password"))
    console.log(this.RegisteredUsers);

  }



}
