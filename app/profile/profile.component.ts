import { Component } from '@angular/core';
import{Router} from '@angular/router'

@Component({
   moduleId: module.id,
  templateUrl: 'profile.component.html'
})

// Component class
export class ProfileComponent{

  constructor(private router: Router){}
}