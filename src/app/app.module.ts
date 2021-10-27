import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProfileModule } from './profile/profile.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AdminPanelModule
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class AppModule { }
