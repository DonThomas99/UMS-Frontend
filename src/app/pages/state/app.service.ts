import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService{
  constructor(private http:HttpClient){}

  loadProfile(){
    return this.http.get("http://localhost:3000/profile",{
      withCredentials:true
    });
  }

  loadUsers(){
    return this.http.get("http://localhost:3000/admin/users",{
      withCredentials:true
    });
  }
}