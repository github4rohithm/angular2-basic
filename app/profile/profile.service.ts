import {Injectable} from "@angular/core";
import {Profile} from '../models/profile'
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class ProfileService{
    constructor(private http:Http){

    }

    private profileDetailsUrl: string = "http://34.209.1.75:8888/drTujar-apiManager-0.0.1-SNAPSHOT/user"
    private profileSave: string = "http://localhost:8080/save"
    
    getProfileDetails():Observable<Profile[]>{
        return this.http.get(this.profileDetailsUrl)
            .map(this.extractData)
            .catch(this.handleError);
            
    }

     addProfile(profile:Profile) {
         //var headers = new this.http.head();
      //headers.append('Content-Type', 'application/json');
      console.log("testing",JSON.stringify(profile));
       return this.http.post(this.profileSave, profile, { 
           //headers:headers
        })
       .map(res =>  res);     	    
    }
    

    private extractData(res:Response){
        let responseBody = res.json();
        return responseBody || []
    }

     private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}