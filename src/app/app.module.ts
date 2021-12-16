import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserAdminListComponent } from './admin-panel/user-list/user-admin-list.component';
import { RegisterComponent } from './profile/register/register.component';
import { UserDetailsComponent } from './profile/user-details/user-details.component';
import { UserListComponent } from './profile/user-list/user-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'userDetails', component: UserDetailsComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'adminPanel', component: AdminPanelComponent },
  { path: 'userAdminList', component: UserAdminListComponent },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AdminPanelModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class AppModule { }
