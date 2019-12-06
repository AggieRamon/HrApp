import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DeptTableComponent } from "./dept-table/dept-table.component";
import { EmpTableComponent } from "./emp-table/emp-table.component";
import { HomeComponent } from "./home/home.component";
import { JobTableComponent } from "./job-table/job-table.component";
import { LocTableComponent } from "./loc-table/loc-table.component";
import { NewEmpComponent } from "./new-emp/new-emp.component";
import { TitleBarComponent } from './title-bar/title-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpTableComponent,
    JobTableComponent,
    DeptTableComponent,
    LocTableComponent,
    NewEmpComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
