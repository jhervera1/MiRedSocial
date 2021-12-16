import { Component, Input, OnInit } from '@angular/core';
import { registerUser, User } from 'src/app/model/models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user:registerUser|any = {};

  constructor() {

   }

  ngOnInit(): void {
    console.log(this.user.photo)
  }

}
