import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    selectedStudent:Student;
    students:Student[];

    readonly baseURL ='https://portal.esquare-homeschooling.com:3443/student/';
    readonly registerURL='https://portal.esquare-homeschooling.com:3443/register/student';


  constructor(private http : HttpClient) 
  { }

  postStudent(std : Student){
    return this.http.post(this.registerURL,std);
  }
  getStudentList(){
    return this.http.get(this.baseURL);
  }
  getStudent(){
    console.log(this.baseURL+"profile/" + JSON.parse(localStorage.getItem("student")));
    return this.http.get(this.baseURL+"profile/" + JSON.parse(localStorage.getItem("student")));
  }
  assignStudent(stdId:String,section:String){
    return this.http.patch(this.baseURL,{student_id:stdId,student_section:section});
  }
  deleteStudent(id:String)
  {
    return this.http.delete(this.baseURL + `/${id}`);
  }
  storeStudent(currentStudent:String)
  {
    localStorage.setItem("student",JSON.stringify(currentStudent));
  }
}
