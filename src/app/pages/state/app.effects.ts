import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "./app.service";
import { retrievepost, retrievepostSuccess, retrieveprofile, retrieveprofileSuccess } from "./app.actions";
import { map, switchMap } from "rxjs";
import { Profile, Users } from "../models/allUsers";
import { Injectable } from "@angular/core";

@Injectable()
export class appEffects{
  constructor(
    private actions$: Actions,
    private appService: AppService
  ){}

  loadProfile$ = createEffect(()=>
  this.actions$.pipe(
    ofType(retrieveprofile),
    switchMap(()=>{
      return this.appService.loadProfile()
      .pipe(map((data)=>retrieveprofileSuccess({userdetails:data as Profile})))
    })
  )
  )

  loadAllUsers$ = createEffect(()=>
  this.actions$.pipe(
    ofType(retrievepost),
    switchMap(()=>{
      return this.appService.loadUsers()
      .pipe(map((data)=>retrievepostSuccess({allusers:data as Users[]})))
    })
  )
  )
}