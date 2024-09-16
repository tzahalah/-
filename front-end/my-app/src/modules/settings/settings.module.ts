import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginService } from 'src/app/login/login.service';
import { LoginGuardService } from 'src/app/login/login-guard.service';
import { HomeSettingsComponent } from './home-settings/home-settings.component';

@NgModule({
  declarations: [ AccountComponent, ProfileComponent,FavoritesComponent, HomeSettingsComponent],
    imports: [CommonModule,SettingsRoutingModule],
     providers:[]
    //exports:[AccountComponent, ProfileComponent,FavoritesComponent]
})
export class SettingsModule { }
