import { Component,OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  message=""

  constructor(private http : HttpClient){}
  ngOnInit(): void {
  
    this.http.get('http://localhost:3000/user',{
      withCredentials:true
    })
    .subscribe({
      next:(res)=>{
      Emitters.authEmitter.emit(true);
    },
    error:(err)=>{
      Emitters.authEmitter.emit(false)
    }}
    )
  }


}
