import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})

export class ProfileDetailsComponent implements OnInit {

   managers:any;
   employees:any;
   subEmployeesList:any;
   i:number;
   storeData :any;

   managerDisplay=false;
   employeeDisplay=true;
   subEmployees=false;


   constructor(private employeesService: EmployeesService) {
    //  managers data
    this.managers=this.employeesService.getManagerList();
    console.log(this.managers);
    // for(this.i =0 ; this.i<this.managers.length;this.i++){
    // console.log('0909',this.managers[this.i].emp_Id);
    // }
  }
  managerDetails(){
    this.managerDisplay=false;
    this.employeeDisplay=true;
  }

  emplyoeeDetails(id:number,name:string){
    this.managerDisplay=!this.managerDisplay;
    this.employeeDisplay=!this.employeeDisplay;
    id=id;
    name=name;
    console.log(id,name,'112233')
    for(this.i =0 ; this.i<this.managers.length;this.i++){
      if(id  == this.managers[this.i].manager_Id){
        console.log('55',  this.managers[this.i].manager_Id)
        this.subEmployees = true
        this.storeData =  this.managers[this.i];
        this.subEmployeesList = this.storeData.sub_emp_list
        console.log('888',this.subEmployeesList)
      }
      }
     return this.subEmployeesList;
  }

  ngOnInit(): void {
//     this.emp = this.employeesService.getEmployeeList();
//     console.log(this.emp)
// return (this.emp);
  }

}
