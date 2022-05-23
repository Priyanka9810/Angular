import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../services/employees.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  i:number;
  storeData:any;
  managers:any;
  submitForm: FormGroup;
  constructor(private employeesService: EmployeesService, private fb: FormBuilder) {

    //  managers data
    this.managers=this.employeesService.getManagerList();
    console.log(this.managers);

  }
onSubmit():void{
  if(this.submitForm.valid){
    console.log('77',this.submitForm.value);
  this.submitForm.reset();
  }
  else{
    alert("Please mark on present Employess's name")
  }
}
  ngOnInit(): void {
    this.submitForm=this.fb.group({
      checked:new FormControl()

    })

    this.submitForm.controls['checked'].valueChanges.subscribe(data=>{
      console.log(data);
    })
  }



}
