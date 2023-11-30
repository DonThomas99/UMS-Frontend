import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  authenticated = false
  constructor(
    private http:HttpClient
  ){
  }
  ngOnInit(): void {
    Emitters.authEmitter.subscribe((auth:boolean)=>{
      this.authenticated = auth;
    })
  }
  logout(): void {
    this.http.post('http://localhost:3000/admin/logout',{},{
      withCredentials:true
    }).subscribe(()=>{
      this.authenticated=false
    })
  }
}
