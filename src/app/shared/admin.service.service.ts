import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Admin} from './admin.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  selectedAdmin: Admin;
  admins:Admin[];


  readonly registerURL='https://portal.esquare-homeschooling.com:3443/register/admin';


  constructor(private http:HttpClient) { }

  postAdmin(std : Admin){
    return this.http.post(this.registerURL,std);
  }
  
  storeAdmin(currentAdmin:String)
  {
    localStorage.setItem("admin",JSON.stringify(currentAdmin));
  }

}
