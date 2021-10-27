import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    UserListComponent,
    UserDetailsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [

  ],
  bootstrap: [
    ProfileComponent
  ]
})
export class ProfileModule { }
