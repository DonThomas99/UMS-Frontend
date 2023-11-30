import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/allUsers';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppService } from '../state/app.service';
import { uniqueEmail } from '../state/app.selectors';
import { retrievepost } from '../state/app.actions';
import { Emitters } from 'src/app/emitters/emitters';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-userlist',
  templateUrl: './admin-userlist.component.html',
  styleUrls: ['./admin-userlist.component.css']
})
export class AdminUserlistComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private store:Store<{allusers:Users[]}>,
    private router:Router,
    private appService:AppService
  ){}

  userdata$ = this.store.pipe(select(uniqueEmail));

  ngOnInit(): void {
    this.http.get('http://localhost:3000/admin/active',{
      withCredentials:true
    }).subscribe({
      next:(res:any)=>{
      this.store.dispatch(retrievepost())
      Emitters.authEmitter.emit(true);
    },error:(err)=>{
      this.router.navigate(['/admin']);
      Emitters.authEmitter.emit(false);
    }})
  }

  deleteUser(userId: any){
    this.http.post(`http://localhost:3000/admin/deleteUser/${userId}`,{},{
      withCredentials:true
    }).subscribe({
      next:(res:any)=>{
      this.store.dispatch(retrievepost())
      Swal.fire("Success","User Deleted Successfully","success");
      Emitters.authEmitter.emit(true);
    },error:(err)=>{
      this.router.navigate(['/admin']);
      Emitters.authEmitter.emit(false);
    }})
  }

  editUser(userId:any){
    this.router.navigate(['/admin/edit',userId]);
  }
}