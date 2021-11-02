import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { UserAdminListComponent } from './user-list/user-admin-list.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    UserAdminListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminPanelModule { }
