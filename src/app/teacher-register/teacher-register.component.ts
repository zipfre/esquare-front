import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TeacherService } from '../shared/teacher.service';

declare var M:any;

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  constructor(public teacherService:TeacherService,
          private router:Router) { 
            this.teacherService.selectedTeacher={
              _id:"",
              first_name:"",
              last_name: "",
              national_id_no:"",
              level: "",
              email: "",
              phone_no:"",
              user_name:"",
              user_password:"",
              section:""
            }
          }

  levels = [{key:"level_1",value:"Level 1"},{key:"level_2",value:"Level 2"},{key:"level_3",value:"Level 3"}];
  

  ngOnInit(): void {
  }
  

  onSubmit(form:NgForm){
    this.teacherService.postTeacher(form.value).subscribe((res)=>
    {
      console.log(res);
      M.toast({html:'Registered successfuly.', classes:'rounded'});
      this.router.navigate(['sign-in']);
    })
  }

}
