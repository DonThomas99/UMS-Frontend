import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router:Router
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
    this.http.get('http://localhost:3000/admin/active',{
      withCredentials:true
    }).subscribe({
      next:(res:any)=>{
      this.router.navigate(['/admin/dashboard'])
      Emitters.authEmitter.emit(true);
    },
   error: (err)=>{
      this.router.navigate(['/admin'])
      Emitters.authEmitter.emit(false);
    }
  })
  }
  
  ValidateEmail = (email: any) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {  
      return true;
    } else {
      return false;
    }
  }
  
  submit(): void {
    const user = this.form.getRawValue();

    if(user.email == "" || user.password == ""){
      Swal.fire("Error","Please enter all the fields","error");
    }else if(!this.ValidateEmail(user.email)){
      Swal.fire("Error","Please enter a valid email","error");
    }else{
      this.http.post('http://localhost:3000/admin/login',user,{
        withCredentials:true
      }).subscribe({
        next:(res)=>this.router.navigate(['/admin/dashboard']),
     error: (err)=>{
        Swal.fire("Error",err.error.message,"error");
      }
    })
    }
  }
}