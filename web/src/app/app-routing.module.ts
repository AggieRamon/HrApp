import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewEmpComponent } from "./new-emp/new-emp.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: NewEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
