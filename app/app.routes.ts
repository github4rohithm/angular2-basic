import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ProfileComponent} from './profile/profile.component'
import { HomeComponent } from "./home/home.component";
import { AddProfileComponent } from "./profile/add.profile.component";

export const routes: Routes = [
    {path:"",redirectTo: '/home',pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'add', component: AddProfileComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);