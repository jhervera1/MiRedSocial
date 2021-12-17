import { Component, OnInit } from '@angular/core';
import { registerUser } from '../model/models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  userList:registerUser[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.getUser();
    console.log(this.userList)
  }

}
