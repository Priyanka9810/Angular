import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor() {}

  getManagerList() {
    const managers = [
      {
        manager_Id: 101,
        manager_Name: 'Harsh',
        manager_Salary: 50000,
        manager_deg: 'Mannager',
        manager_dept: 'Sales',
        sub_emp: 5,
        sub_emp_list: [
          {
            emp_Id: 1,
            emp_Name: 'Priya',
            emp_Salary: 16000,
            emp_deg: 'Jr. Manager',

          },
          {
            emp_Id: 2,
            emp_Name: 'Aditi',
            emp_Salary: 20000,
            emp_deg: 'Intern',
          },
          {
            emp_Id: 3,
            emp_Name: 'Akash',
            emp_Salary: 15000,
            emp_deg: 'Intern',
          },
          {
            emp_Id: 4,
            emp_Name: 'Arav',
            emp_Salary: 15000,
            emp_deg: 'Intern',
          },          {
            emp_Id: 5,
            emp_Name: 'Gaurav',
            emp_Salary: 18000,
            emp_deg: 'Sales Executive',
          },
        ]
      },
      {
        manager_Id: 102,
        manager_Name: 'Manju',
        manager_Salary: 58000,
        manager_deg: 'Mannager',
        manager_dept: 'Production',
        sub_emp: 3,
        sub_emp_list:[     {

            emp_Id: 1,
            emp_Name: 'Arav',
            emp_Salary: 15000,
            emp_deg: 'jr. Manager',

          },{
          emp_Id: 2,
          emp_Name: 'Kushal',
          emp_Salary: 19000,
          emp_deg: 'Intern',

        },
        {
          emp_Id: 3,
          emp_Name: 'Vishal',
          emp_Salary: 20500,
          emp_deg: 'Intern',

        },

      ]
      },
      {
        manager_Id: 103,
        manager_Name: 'Priti',
        manager_Salary: 40000,
        manager_deg: 'Mannager',
        manager_dept: 'Marketing',
        sub_emp: 3,
        sub_emp_list:[
          {
            emp_Id: 1,
            emp_Name: 'Charan',
            emp_Salary: 30500,
            emp_deg: 'BD',
          },
          {
            emp_Id: 2,
            emp_Name: 'Shahid',
            emp_Salary: 25500,
            emp_deg: 'Intern',
          },
          {
            emp_Id: 3,
            emp_Name: 'Rakesh',
            emp_Salary: 20500,
            emp_deg: 'Intern',
          }
        ]
      },
      {
        manager_Id: 104,
        manager_Name: 'Aman',
        manager_Salary: 40500,
        manager_deg: 'Mannager',
        manager_dept: 'IT',
        sub_emp: 4,
        sub_emp_list:[
          {
            emp_Id: 1,
            emp_Name: 'Aditya',
            emp_Salary: 16000,
            emp_deg: 'Backend Devloper',

          },
          {
            emp_Id: 2,
            emp_Name: 'Pankaj',
            emp_Salary: 18000,
            emp_deg: 'Fronted Devloper ',

          },
          {
            emp_Id: 3,
            emp_Name: 'Arush',
            emp_Salary: 15000,
            emp_deg: 'Testing',

          },
          {
            emp_Id: 4,
            emp_Name: 'Priyanshi',
            emp_Salary: 25000,
            emp_deg: 'Team Leader',

          },
        ]
      },
    ];
    return managers;
  }
  getAdminList() {
    const all_admins = [
      {
        ID: 101,
        Name: 'Priyanka',
        password: 'p1234',
        email: 'priyanka.behera@mavenwave.com',
      },
      {
        ID: 102,
        Name: 'Sawan',
        password: 's1234',
        email: 'sawan@mavenwave.com',
      },
    ];
    return all_admins;
  }
}
