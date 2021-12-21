import { Component, Input, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { registerUser } from 'src/app/model/models';
import { UserDetailsComponent } from 'src/app/profile/user-details/user-details.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-admin-list',
  templateUrl: './user-admin-list.component.html',
  styleUrls: ['./user-admin-list.component.css']
})
export class UserAdminListComponent implements OnInit {

  @Input() userList:registerUser[]=[];
  constructor(private modal:BsModalService, private userService:UserService) { }

  ngOnInit(): void {
  }

  openDetails(user:registerUser){

    let modalcom: BsModalRef = this.modal.show(UserDetailsComponent,{initialState:{user}});

  }


  deleteUser(user:registerUser){
    this.userList.forEach((element,index)=>{
      if(user == element){
        this.userList.splice(index,1);
        this.userService.setUser(this.userList);
        this.userService.saveUsers();
      }
    });
  }
}
