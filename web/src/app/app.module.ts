import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DeptTableComponent } from "./dept-table/dept-table.component";
import { EmpTableComponent } from "./emp-table/emp-table.component";
import { HomeComponent } from "./home/home.component";
import { JobTableComponent } from "./job-table/job-table.component";
import { LocTableComponent } from "./loc-table/loc-table.component";
import { NewEmpComponent } from "./new-emp/new-emp.component";
import { TitleBarComponent } from "./title-bar/title-bar.component";
import { UserService } from "./user.service";
import { EditEmpComponent } from "./edit-emp/edit-emp.component";
import { NewJobComponent } from "./new-job/new-job.component";
import { JobService } from "./job.service";
import { NewDeptComponent } from "./new-dept/new-dept.component";
import { NewLocComponent } from "./new-loc/new-loc.component";
import { LocService } from "./loc.service";
import { DeptService } from "./dept.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpTableComponent,
    JobTableComponent,
    DeptTableComponent,
    LocTableComponent,
    NewEmpComponent,
    TitleBarComponent,
    EditEmpComponent,
    NewJobComponent,
    NewDeptComponent,
    NewLocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    JobService,
    DeptService,
    LocService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
