import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserAdminListComponent } from './admin-panel/user-list/user-admin-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './profile/register/register.component';
import { UserDetailsComponent } from './profile/user-details/user-details.component';
import { UserListComponent } from './profile/user-list/user-list.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'userDetails', component: UserDetailsComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'adminPanel', component: AdminPanelComponent },
  { path: 'userAdminList', component: UserAdminListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
