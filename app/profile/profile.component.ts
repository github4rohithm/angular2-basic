import { Component } from '@angular/core';
import{Router} from '@angular/router'
import {ProfileService} from './profile.service'
import {Profile} from '../models/profile'

@Component({
   moduleId: module.id,
  templateUrl: 'profile.component.html'
})

// Component class
export class ProfileComponent{

  private profiles:Profile[] = [];
  private errorMsg: any = '';

  constructor(private router: Router, private profileDataService: ProfileService){
    this.getProfileData();
  }

  getProfileData(){
    this.profileDataService.getProfileDetails()
    .subscribe(response => this.profiles = response,
        error => this.errorMsg = <any>error);
  }

}