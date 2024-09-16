import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { ErrorPageComponent } from "src/app/error-page/error-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { LoginComponent } from "src/app/login/login.component";
import { HomeComponent } from "src/app/home/home.component";
import { HomeSettingsComponent } from "./home-settings/home-settings.component";


const SET_ROUTE:Route[]=[
    {path:"",redirectTo:"homeSettings",pathMatch:"full"},
     {path:"homeSettings",component:HomeSettingsComponent, 
   children:[
     {path:"account", component:AccountComponent },
    {path:"profile", component:ProfileComponent},
    {path:"favorites", component:FavoritesComponent}]}
   
   
]

@NgModule({
    imports:[RouterModule.forChild(SET_ROUTE)],
    exports:[RouterModule]
})
export class SettingsRoutingModule{

} 