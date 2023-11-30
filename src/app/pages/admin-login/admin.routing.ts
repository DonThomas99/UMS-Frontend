import { RouterModule, Routes } from "@angular/router";
import { AdminLoginComponent } from "./admin-login.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AdminUserlistComponent } from "../admin-userlist/admin-userlist.component";
import { AdminUsereditComponent } from "../admin-useredit/admin-useredit.component";
import { AdminCreateuserComponent } from "../admin-createuser/admin-createuser.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path:'admin',component:AdminLoginComponent},
  {
    path:'admin',
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'userlist',component:AdminUserlistComponent},
      {path:'edit/:id',component:AdminUsereditComponent},
      {path:'createuser',component:AdminCreateuserComponent}
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class AdminRoutingModule {}