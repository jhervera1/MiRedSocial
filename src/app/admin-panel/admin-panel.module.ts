import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminPanelModule { }
