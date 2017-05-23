import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import{ProfileComponent} from './profile/profile.component'
import{routing} from './app.routes'
import { HomeComponent } from "./home/home.component";


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        routing
        
    ],
    declarations: [
        AppComponent,
        ProfileComponent,
        HomeComponent
      
    ],
    providers: [
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }