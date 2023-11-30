import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import {Store,select} from '@ngrx/store';
import { Profile } from "../models/allUsers";
import { Router } from '@angular/router';
import { userProfile } from "../state/app.selectors";
import { Emitters } from 'src/app/emitters/emitters';
import { retrieveprofile } from "../state/app.actions";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  form !: FormGroup;
  public name: any="";
  public email: any="";
  img: any="";
  selectedFile: any|File=null

constructor(
  private http: HttpClient,
  private store: Store<{userdetails:Profile}>,
  private formBuilder: FormBuilder,
  private router: Router
){}
userData$ = this.store.pipe(select(userProfile)).subscribe(userProfileData => {
  this.name = userProfileData.name;
  this.email = userProfileData.email;
  this.img = userProfileData.image;
  console.log("",userProfileData);
  console.log("guguhv",this.email);
  
  
})
  ngOnInit(): void { 
    this.http.get('http://localhost:3000/user',{
      withCredentials:true
    })
    .subscribe({
      next:(res)=>{
        this.store.dispatch(retrieveprofile());
        Emitters.authEmitter.emit(true)
      },
      error:(err)=>{
        this.router.navigate(['/']);
        Emitters.authEmitter.emit(false);
      }
    })
  }
  onFileSelected(event: any)
  {
    this.selectedFile =<File>event.target.files[0]
    console.log(event)
  }
  onSubmit(){
    const formData = new FormData()
    formData.append('image',this.selectedFile,this.selectedFile.name);
    this.http.post('http://localhost:3000/profile-upload-single',formData,{
      withCredentials:true
    }).subscribe({
      next:(res:any)=>{
        console.log(res);
        
      Emitters.authEmitter.emit(true);
      this.store.dispatch(retrieveprofile());
      Swal.fire('Success','Saved','success');
    },
    error:(err)=>{
Swal.fire("Error",err.error.message,'error')
    }
    })
  }
  }





