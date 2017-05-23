import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from "@angular/forms";
import { User } from "./user.interface";


@Component({
    moduleId: module.id,
  templateUrl: 'home.component.html'
})

// Component class
export class HomeComponent implements OnInit {
    public myForm: FormGroup
    public submitted: boolean;
    public events: any[] = []

    constructor(private fb: FormBuilder){}

    ngOnInit(){
        this.myForm = this.fb.group({
            name:['',[<any>Validators.required]],
            address: this.fb.group({
                street:['',<any>Validators.required],
                postcode:['8000']
            })
        });

       this.subcribeToFormChanges();
    }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(model: User, isValid:boolean){
        this.submitted = true;
        console.log(model,isValid)
    }
}