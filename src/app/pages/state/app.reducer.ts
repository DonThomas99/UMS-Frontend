import { createReducer, on } from "@ngrx/store";
import { Profile, Users } from "../models/allUsers";
import { retrievepostSuccess, retrieveprofileSuccess } from "./app.actions";

export const initialStateOfUser: Profile = {
  _id: "",
  name: "",
  email: "",
  password: "",
  image: "",
  __v: ""
}

const _ProfileReducer = createReducer(
  initialStateOfUser,
  on(retrieveprofileSuccess,(state,{userdetails})=>{
    return userdetails;
  })
)

export function profileReducer(state: any,action: any){
  return _ProfileReducer(state,action);
}

//-------------------------------------//

export const initialState: Users[] = [];

const _postReducer = createReducer(
  initialState,
  on(retrievepostSuccess,(state,{allusers})=>{
    return [...allusers];
  })
)

export function postReducer(state: any,action: any){
  return _postReducer(state,action);
}