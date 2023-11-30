import { Profile, Users } from "../models/allUsers";

export interface appProfile{
  userdetails: Profile
}

export interface appUsers{
  allusers: Users[];
}