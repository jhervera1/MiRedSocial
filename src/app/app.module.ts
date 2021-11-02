import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AdminPanelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class AppModule { }
