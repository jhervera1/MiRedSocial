import { Component, Input, OnInit } from '@angular/core';
import { registerUser } from 'src/app/model/models';
import { ModalModule,BsModalService,ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';
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

  /*  let dialogRef = this.dialogMod.open(UserDetailsComponent, {
      height: '400px',
      width: '600px',
      data: {user:user},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });*/

  }
}
