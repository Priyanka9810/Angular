import { Component, OnInit } from '@angular/core';
import {EmployeesService} from 'src/app/services/employees.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admins:any;
i:number;

success:boolean=false;
  checkoutForm: FormGroup;

  ngOnInit(): void {
    this.checkoutForm=this.fb.group({
      name: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password:new FormControl('',[
        Validators.required

      ])
    })
  }

  constructor(private employeesService: EmployeesService, private fb: FormBuilder ) {
    this.admins=this.employeesService.getAdminList();
    console.log(this.admins)
   }


   backtoLogin(){
   this.success=false;

   }
    onSubmit(): void {
      // Process checkout data here

      this.admins = this.employeesService.getAdminList();
      console.log('11',this.admins)
      console.warn('Your form has been submitted', this.checkoutForm.value);


      if(this.checkoutForm.valid){
        for(this.i =0 ; this.i<this.admins.length;this.i++){
        if(this.checkoutForm.controls['name'].value==this.admins[this.i].Name && this.checkoutForm.controls['email'].value==this.admins[this.i].email  && this.checkoutForm.controls['password'].value==this.admins[this.i].password)
        {

         this.success=true;
         break;
        }
        else{
          alert("this is not a admin user")
          break;
        }

      }

        this.checkoutForm.reset();
      }



    }






}
