import { Component, Input, OnInit } from '@angular/core';
import { registerUser } from 'src/app/model/models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {


  @Input() userList: registerUser[]=[];
  constructor(private modal:BsModalService) { }

  ngOnInit(): void {
  }

  openDetails(user:registerUser){

    let modalcom: BsModalRef = this.modal.show(UserDetailsComponent,{initialState:{user}});

  }
}
