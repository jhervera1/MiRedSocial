import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { UserAdminListComponent } from './user-list/user-admin-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminPanelComponent,
    UserAdminListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AdminPanelModule { }
