import { Component, OnInit } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { ProfileService } from "./profile/profile.service";

@Component({
    moduleId: module.id,
    selector:'my-app',
    templateUrl:'app.component.html',
    providers:[ProfileService]
})
export class AppComponent {
 
    
}