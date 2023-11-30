import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message = ''

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/admin/active',{
      withCredentials:true
    }).subscribe({
      next:(res:any)=>{
      Emitters.authEmitter.emit(true);
    },
    error:(err)=>{
      Emitters.authEmitter.emit(false);
    }
  })
  }
}