import { Component, Input, OnInit } from '@angular/core';
import { registerUser, User } from 'src/app/model/models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user:registerUser|any = {};
  imgBase64Path: string = '';
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  constructor() {

   }

  ngOnInit(): void {

  }

}
