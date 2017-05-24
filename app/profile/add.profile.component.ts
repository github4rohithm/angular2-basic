import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from "@angular/forms";
import { Profile } from "../models/profile";
import { ProfileService } from "./profile.service";


@Component({
    moduleId: module.id,
  templateUrl: 'add.profile.component.html'
})

// Component class
export class AddProfileComponent implements OnInit {
    public myForm: FormGroup
    public submitted: boolean;
    public events: any[] = []
     private profile:Profile;

    constructor(private fb: FormBuilder, private profileService:ProfileService){}

    ngOnInit(){
        this.myForm = this.fb.group({
            id:['',[]],
            firstName:['',[<any>Validators.required]],
            lastName:['',[]],
            userName:['',[]],
             password:['',[]]
        });

       this.subcribeToFormChanges();
    }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(model: Profile){
        this.submitted = true;
        console.log(JSON.stringify(model))
        this.profile = this.myForm.value;
        this.submitPost();
    }
    response:string;
    
    submitPost()
    {        
        console.log("submit Post click happend " + this.profile)
        this.profileService.addProfile(this.profile).subscribe(
           data => console.log(this.response = data),
           err => console.log(err),
           () => console.log('Request Completed')
        ); 
          
    }
    
}