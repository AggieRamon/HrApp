import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewEmpComponent } from "./new-emp/new-emp.component";
import { EditEmpComponent } from "./edit-emp/edit-emp.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: NewEmpComponent},
  { path: "edit/:id", component: EditEmpComponent},
  { path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
